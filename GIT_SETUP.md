# Git Repository Setup

The repository has been connected to GitHub. Here's what was done:

## Repository Information

- **GitHub Repository**: `git@github.com:ninienowrin/avia-nahreen-portfolio.git`
- **Branch**: `main`
- **Status**: Initial commit created

## Next Steps

To push your code to GitHub, run:

```bash
git push -u origin main
```

If you encounter SSH authentication issues, you may need to:

1. **Set up SSH keys** (if not already done):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   Then add your public key to GitHub: Settings → SSH and GPG keys → New SSH key

2. **Or use HTTPS instead**:
   ```bash
   git remote set-url origin https://github.com/ninienowrin/avia-nahreen-portfolio.git
   ```

## Future Updates

After making changes to your files:

```bash
# Stage all changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

## Files Included

The repository includes:
- `index.html` - Main website file
- `styles.css` - All styling
- `script.js` - Interactive functionality
- `README.md` - Project documentation
- `HOW_TO_RUN.md` - Instructions for running locally
- `ADD_IMAGES.md` - Guide for adding images
- `.gitignore` - Git ignore file

## Deployment

Once pushed to GitHub, you can deploy to:
- **Netlify**: Connect GitHub repo → Auto-deploy
- **Vercel**: Import GitHub repo → Auto-deploy
- **GitHub Pages**: Settings → Pages → Select branch


