# How to Host Video Externally and Use the Link

## Option 1: Google Drive (Free)

### Steps:
1. Upload your video to Google Drive
2. Right-click the video → "Share" → "Get link"
3. Change sharing to "Anyone with the link can view"
4. Get the direct download link:
   - The share link looks like: `https://drive.google.com/file/d/FILE_ID/view`
   - Convert it to direct download: `https://drive.google.com/uc?export=download&id=FILE_ID`
   - Or use: `https://drive.google.com/uc?export=view&id=FILE_ID`

### Example:
If your Google Drive link is:
```
https://drive.google.com/file/d/1ABC123xyz456/view?usp=sharing
```

Extract the FILE_ID (the part between `/d/` and `/view`):
```
FILE_ID = 1ABC123xyz456
```

Then use in HTML:
```html
<source src="https://drive.google.com/uc?export=view&id=1ABC123xyz456" type="video/mp4">
```

**Note**: Google Drive may have limitations on video playback. For better results, use Option 2 or 3.

---

## Option 2: YouTube (Recommended - Free & Reliable)

### Steps:
1. Upload video to YouTube as **Unlisted** (so it's not public but can be embedded)
2. Get the video ID from the URL: `https://www.youtube.com/watch?v=VIDEO_ID`
3. Use YouTube embed URL format

### Update HTML to use YouTube:
Replace the `<video>` tag with an iframe:

```html
<div class="site-header-image">
    <iframe 
        class="header-video" 
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0&rel=0&iv_load_policy=3"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1;">
    </iframe>
    <img class="header-fallback" src="images/boat.jpeg" alt="Header">
    <div class="header-overlay">
        <div class="water-texture"></div>
    </div>
</div>
```

**Note**: YouTube doesn't support true looping with autoplay, but the `playlist=VIDEO_ID` parameter helps.

---

## Option 3: Vimeo (Free - Good Quality)

### Steps:
1. Upload to Vimeo (free account)
2. Set video to "Unlisted" or "Anyone with link"
3. Get embed code or direct link
4. Use similar iframe approach as YouTube

---

## Option 4: Cloudinary (Free Tier - Best for Web)

### Steps:
1. Sign up at https://cloudinary.com (free tier available)
2. Upload your video
3. Get the direct video URL
4. Use it directly in the `<source>` tag

Cloudinary provides optimized video URLs perfect for web use.

---

## Option 5: Any Direct Video URL

If you have the video hosted anywhere with a direct link (like Dropbox, your own server, etc.), just use:

```html
<source src="https://your-domain.com/path/to/video.mp4" type="video/mp4">
```

---

## Quick Setup for Google Drive

1. Upload `buriganga.mp4` to Google Drive
2. Share → Get link → Make it "Anyone with link can view"
3. Copy the FILE_ID from the URL
4. Replace `VIDEO_URL_HERE` in `index.html` with:
   ```
   https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
   ```

## Testing

After updating the video URL:
1. Save the file
2. Test locally by opening `index.html` in a browser
3. Check browser console (F12) for any errors
4. If video doesn't load, the fallback image will show








