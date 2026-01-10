# Adding Water Video Background

## Option 1: Video Background (Recommended)

To add a water/river video background to the header:

1. **Find a video**: Get a royalty-free video of flowing water/river/stream from:
   - Pexels Videos: https://www.pexels.com/videos/search/water/
   - Pixabay Videos: https://pixabay.com/videos/search/water/
   - Unsplash Videos: https://unsplash.com/videos

2. **Video Requirements**:
   - Format: MP4 (H.264 codec recommended)
   - Duration: 10-30 seconds (will loop)
   - Resolution: 1920x1080 or higher
   - File size: Try to keep under 5MB for fast loading
   - Content: Calm, flowing water - river, stream, or ocean waves

3. **Add the video**:
   - Save the video as `images/water-river.mp4`
   - The site will automatically use it as the background
   - If the video doesn't load, it falls back to the boat image

4. **Video tips for best results**:
   - Choose videos with subtle, slow movement
   - Avoid videos with too much contrast or bright colors
   - Horizontal/landscape orientation works best
   - Videos should loop seamlessly (start and end frames should match)

## Option 2: CSS-Only Water Effect (No Video Needed)

If you don't want to use a video, the site already includes:
- A subtle water texture animation
- Gradient background that evokes water
- Shimmer effects

The CSS water effect works automatically without any files to add.

## Option 3: Static Water Image

You can also use a high-quality water image:
1. Replace `images/boat.jpeg` with a water scene
2. The water texture animation will still work on top

## Current Implementation

The header now has:
- ✅ Video support with graceful fallback
- ✅ CSS water texture shimmer animation
- ✅ Gradient overlay for readability
- ✅ Smooth fade-in when video loads








