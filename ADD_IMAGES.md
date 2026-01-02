# Adding Images to the Portfolio

## Profile Image

To add a profile image to the hero section:

1. **Prepare your image:**
   - Recommended size: 400x400 pixels (square)
   - Format: JPG or PNG
   - File name: `profile.jpg` or `profile.png`

2. **Add the image:**
   - Place the image file in the same directory as `index.html`
   - Open `index.html`
   - Find the hero section (around line 35)
   - Look for the comment: `<!-- Add profile image here: <img src="profile.jpg" alt="Avia Nahreen"> -->`
   - Replace the comment with:
     ```html
     <img src="profile.jpg" alt="Avia Nahreen">
     ```
   - Or if your file is named differently:
     ```html
     <img src="your-image-name.jpg" alt="Avia Nahreen">
     ```

3. **The image will automatically:**
   - Display as a circular profile picture
   - Be centered in the hero section
   - Have a subtle border and background

## Additional Images

You can also add images to other sections:

### Research/Work Images
- Add images related to your research
- Place them in sections like "About" or create a new "Research" section
- Use the same styling approach

### Example: Adding an image to About section

```html
<div class="about-content">
    <img src="research-image.jpg" alt="Research description" style="width: 100%; max-width: 600px; margin: 2rem 0; border-radius: 4px;">
    <p>Your text here...</p>
</div>
```

## Image Optimization Tips

1. **Compress images** before uploading to reduce file size
2. **Use appropriate formats:**
   - JPG for photos
   - PNG for graphics with transparency
   - WebP for modern browsers (best compression)
3. **Keep file sizes under 500KB** for faster loading
4. **Use descriptive alt text** for accessibility

## Current Image Placeholder

The hero section currently has a placeholder with a subtle gradient. Once you add an image, it will replace the placeholder automatically.

