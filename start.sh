#!/usr/bin/env bash
# Start a simple Python HTTP server in the project directory
# Usage: ./start.sh [PORT]

PORT=${1:-8080}
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR" || exit 1

PIDFILE="server.pid"
LOGFILE="server.log"

if [ -f "$PIDFILE" ]; then
  PID=$(cat "$PIDFILE")
  if kill -0 "$PID" 2>/dev/null; then
    echo "Server already running (pid $PID)"
    exit 0
  else
    echo "Found stale pid file, removing."
    rm -f "$PIDFILE"
  fi
fi

nohup python3 -m http.server "$PORT" > "$LOGFILE" 2>&1 &
echo $! > "$PIDFILE"
echo "Started server on port $PORT (pid $(cat $PIDFILE)). Logs: $LOGFILE"
