# How to Run the Portfolio Website

This guide will help you run the portfolio website locally on your computer.

## Quick Start (Simplest Method)

### Option 1: Using Python (Recommended)

If you have Python installed:

1. **Open a terminal/command prompt** in the project folder (`/home/shahazadi/nahreen-portfolio`)

2. **For Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **For Python 2 (if Python 3 is not available):**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Open your web browser** and go to:
   ```
   http://localhost:8000
   ```

4. **To stop the server:** Press `Ctrl + C` in the terminal

### Option 2: Using Node.js (if you have Node.js installed)

1. **Install a simple HTTP server globally:**
   ```bash
   npm install -g http-server
   ```

2. **Run the server:**
   ```bash
   http-server -p 8000
   ```

3. **Open your web browser** and go to:
   ```
   http://localhost:8000
   ```

### Option 3: Direct File Opening (Limited - some features may not work)

Simply double-click the `index.html` file to open it in your browser. However, some features (like smooth scrolling) work better with a local server.

**Note:** Using Option 1 or 2 (local server) is recommended for the best experience.

## System Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for Option 1) - usually pre-installed on Linux/Mac
- Or Node.js (for Option 2)

## Troubleshooting

### Port 8000 is already in use

If you get an error that port 8000 is busy, use a different port:

```bash
python3 -m http.server 8080
```

Then access it at: `http://localhost:8080`

### Python not found

- **Linux/Mac:** Python 3 is usually pre-installed. Try `python3` instead of `python`
- **Windows:** Download Python from [python.org](https://www.python.org/downloads/)

### Browser shows blank page

- Make sure you're accessing `http://localhost:8000` (not just opening the HTML file)
- Check that the server is running (you should see messages in the terminal)
- Try a different browser
- Check browser console for errors (F12 key)

## Testing the Website

Once the website is running:

1. **Navigate through all sections** using the menu
2. **Test the Writings tabs** (Academic, Opinion Pieces, Blog)
3. **Check responsiveness** by resizing your browser window
4. **Test all links** to ensure they work
5. **Test the contact email link**

## Next Steps

After testing locally:

1. **Deploy to a hosting service** (see README.md for deployment options)
2. **Connect your domain** after purchase
3. **Add more content** as it becomes available

## Need Help?

- Check the README.md for deployment instructions
- Ensure all files (index.html, styles.css, script.js) are in the same folder
- Make sure you're running the server from the correct directory

