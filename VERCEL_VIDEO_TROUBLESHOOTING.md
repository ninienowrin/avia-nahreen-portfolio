# Troubleshooting Video on Vercel

## Issue: Video Not Showing, Only Fallback Image

If your video isn't showing on Vercel (only the fallback image appears), try these steps:

### 1. Check Browser Console
Open your browser's developer console (F12) and look for errors:
- Check the "Console" tab for error messages
- Check the "Network" tab to see if `buriganga-s.mp4` is being requested
- Look for 404 errors or CORS errors

### 2. Verify File is Deployed
Check if the file is accessible directly:
- Try accessing: `https://your-site.vercel.app/images/buriganga-s.mp4`
- If you get a 404, the file wasn't deployed
- If you get the file, it's deployed correctly

### 3. Vercel File Size Considerations
- Vercel can handle files up to 50MB, but larger files slow down deployments
- Your 7MB file should work fine
- If deployment is slow, consider using Vercel Blob Storage

### 4. Check Deployment Logs
1. Go to Vercel Dashboard
2. Click on your project
3. Go to "Deployments" tab
4. Click on the latest deployment
5. Check "Build Logs" for any errors

### 5. Verify Git Commit
Make sure the video file was committed:
```bash
git ls-tree -r HEAD --name-only | grep buriganga
```
Should show: `images/buriganga-s.mp4`

### 6. Force Redeploy
If the file exists but isn't showing:
1. Go to Vercel Dashboard
2. Latest deployment → "..." menu
3. Click "Redeploy"

### 7. Alternative: Use Vercel Blob Storage
For better performance with videos:
1. Install Vercel Blob: `npm i @vercel/blob`
2. Upload video to Blob storage
3. Use the Blob URL in your HTML

### 8. Check File Path
Ensure the path in HTML matches the file location:
- HTML: `src="images/buriganga-s.mp4"`
- File location: `images/buriganga-s.mp4` (in root)

### 9. Test Locally First
Test the video locally:
```bash
# Using Python
python3 -m http.server 8000

# Or using Node
npx serve
```
Then visit `http://localhost:8000` and check if video loads

### 10. Video Format Check
Ensure the video is in a web-compatible format:
- Format: MP4 (H.264 codec)
- Check with: `ffmpeg -i images/buriganga-s.mp4` (if you have ffmpeg)

## Quick Fixes

**If video file is missing from deployment:**
```bash
git add images/buriganga-s.mp4
git commit -m "Add video file"
git push origin main
```

**If path is incorrect:**
- Change from: `src="/images/buriganga-s.mp4"` (absolute)
- To: `src="images/buriganga-s.mp4"` (relative)

**If video loads but doesn't autoplay:**
- Check browser autoplay policies
- Ensure `muted` attribute is set (required for autoplay)
- Test in different browsers







