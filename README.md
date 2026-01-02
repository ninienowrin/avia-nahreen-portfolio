# Avia Nahreen Portfolio Website

A modern, responsive portfolio website showcasing academic publications, opinion pieces, personal blog, and podcasts.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Writings Section**: Three-tab layout for Academic, Opinion Pieces, and Personal Blog
- **Podcasts**: Embedded YouTube videos from the Just Urban channel
- **Easy to Update**: Simple HTML/CSS/JS structure for easy content management
- **Free Hosting Ready**: Can be deployed to multiple free hosting platforms

## Structure

- `index.html` - Main HTML file
- `styles.css` - All styling and responsive design
- `script.js` - Interactive functionality (tabs, mobile menu, smooth scrolling)
- `README.md` - This file

## Deployment Options (All Free)

### Option 1: Netlify (Recommended - Easiest)

1. Push your code to a GitHub repository
2. Go to [netlify.com](https://www.netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account and select the repository
5. Netlify will automatically detect it's a static site and deploy
6. Your site will be live at `yoursite.netlify.app`
7. After purchasing a domain, go to Site settings → Domain management → Add custom domain

### Option 2: Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect and deploy
6. Your site will be live at `yoursite.vercel.app`
7. Add custom domain in Project Settings → Domains

### Option 3: GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select the branch (usually `main` or `master`)
4. Select the folder (usually `/ (root)`)
5. Click Save
6. Your site will be live at `username.github.io/repository-name`
7. For custom domain, add a `CNAME` file with your domain name

### Option 4: Cloudflare Pages

1. Push your code to a GitHub repository
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Select Pages → Create a project
4. Connect your Git repository
5. Configure build settings (no build needed for static site)
6. Deploy
7. Add custom domain in Pages → Your site → Custom domains

## Adding Content

### Academic Publications

Academic articles can be added in two ways:

1. **Manual Addition**: Edit `index.html` and add writing items to the `#academic-list` div, or use the `addWritingItem()` function in `script.js`

2. **Google Scholar API** (Advanced): Set up Google Scholar API to fetch publications automatically (requires API setup)

### Opinion Pieces

Add opinion pieces to the `#opinion` tab content in `index.html` using the same structure as academic items.

### Personal Blog

Add blog posts to the `#blog` tab content in `index.html`.

### Podcasts

The YouTube channel is already embedded. To add specific videos:

1. Get the video ID from YouTube URL
2. Update the iframe `src` in the podcasts section
3. Or add multiple video embeds using the same structure

Example iframe for a specific video:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

## Customization

### Colors

Edit the CSS variables in `styles.css` at the top:

```css
:root {
    --primary-color: #2563eb;  /* Change this for main color */
    --primary-dark: #1e40af;
    --secondary-color: #64748b;
    /* ... */
}
```

### Fonts

The site uses Google Fonts (Inter). To change:

1. Update the Google Fonts link in `index.html`
2. Update the `font-family` in `styles.css`

### Sections

Add or modify sections by editing `index.html`. Each section follows a consistent structure.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight (no frameworks)
- Fast loading times
- SEO-friendly structure
- Accessible markup

## Next Steps

1. **Add Content**: Populate the writings sections with actual articles
2. **Add More Sections**: About page details, CV download, etc.
3. **Custom Domain**: Purchase domain and configure DNS
4. **SEO**: Add meta tags, Open Graph tags for better social sharing
5. **Analytics**: Add Google Analytics or similar (optional)

## Support

For issues or questions about deployment, refer to the hosting platform's documentation:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)

