# How to Use Google Drive Video

## Steps to Get Your Google Drive Video Link:

1. **Upload your video** to Google Drive

2. **Share the video**:
   - Right-click on the video file
   - Click "Share"
   - Change to "Anyone with the link can view"
   - Copy the share link

3. **Extract the File ID**:
   - Your share link will look like:
     ```
     https://drive.google.com/file/d/1ABC123xyz456DEF789/view?usp=sharing
     ```
   - The File ID is the part between `/d/` and `/view`
   - In the example above, it's: `1ABC123xyz456DEF789`

4. **Create the direct video URL**:
   - Format: `https://drive.google.com/uc?export=view&id=YOUR_FILE_ID`
   - Example: `https://drive.google.com/uc?export=view&id=1ABC123xyz456DEF789`

5. **Update `index.html`**:
   - Find this line:
     ```html
     <source src="https://drive.google.com/uc?export=view&id=GOOGLE_DRIVE_FILE_ID" type="video/mp4">
     ```
   - Replace `GOOGLE_DRIVE_FILE_ID` with your actual File ID

## Alternative URL Formats:

If the first format doesn't work, try these:

1. **Download format** (sometimes works better):
   ```
   https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
   ```

2. **Stream format**:
   ```
   https://drive.google.com/uc?export=stream&id=YOUR_FILE_ID
   ```

## Example:

If your Google Drive share link is:
```
https://drive.google.com/file/d/1aBcD2eF3gH4iJ5kL6mN7oP8qR9sT0uV/view?usp=sharing
```

Your File ID is: `1aBcD2eF3gH4iJ5kL6mN7oP8qR9sT0uV`

Update the HTML to:
```html
<source src="https://drive.google.com/uc?export=view&id=1aBcD2eF3gH4iJ5kL6mN7oP8qR9sT0uV" type="video/mp4">
```

## Important Notes:

- ✅ Google Drive videos work better than YouTube for fullscreen control
- ✅ The video will take full width and height of the header
- ✅ Autoplay, mute, and loop are all enabled
- ⚠️ Make sure the video sharing is set to "Anyone with the link"
- ⚠️ If the video doesn't load, check browser console (F12) for errors








