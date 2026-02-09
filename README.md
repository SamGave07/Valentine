# 💘 Valentine's Rift

A League of Legends client-inspired Valentine's Day website.

## 🎮 Features

- Full LoL client experience: Launcher → Queue → Match Found → Champion Select → Valentine Pick → Loading → Final Message
- Authentic LoL styling with gold/blue theme, glowing animations, and smooth transitions
- Interactive valentine selection with custom error messages for wrong picks
- Timer-based gameplay mechanics

## 🚀 Local Development

### Start the server
```bash
./start.sh [PORT]
```

### Stop the server
```bash
./stop.sh
```

### Manual start
```bash
python3 -m http.server 8080
```

Then open http://localhost:8080

## ⚙️ Customization

Edit the `CONFIG` object at the top of `js/script.js` to customize:
- Names and messages
- Timer durations
- Valentine options and error messages
- Final love message
- Champion images (replace Lux with custom photos)

## 📝 License

Made with ❤️ for Valentine's Day 2026
