#!/usr/bin/env bash
# Stop the server started by start.sh
# Usage: ./stop.sh

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR" || exit 1

PIDFILE="server.pid"

if [ ! -f "$PIDFILE" ]; then
  echo "No server.pid found. Is the server running?"
  exit 1
fi

PID=$(cat "$PIDFILE")
if kill -0 "$PID" 2>/dev/null; then
  echo "Stopping server (pid $PID)..."
  kill "$PID"
  sleep 1
  if kill -0 "$PID" 2>/dev/null; then
    echo "Process did not stop, sending SIGKILL..."
    kill -9 "$PID" 2>/dev/null || true
  fi
  echo "Stopped."
else
  echo "Process $PID is not running. Removing pid file."
fi

rm -f "$PIDFILE"
