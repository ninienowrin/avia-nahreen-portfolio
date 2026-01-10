# How to Edit Your Portfolio Website (GitHub Browser Guide)

**Guide for Avia Nahreen**

This guide explains how to update your portfolio website directly through GitHub's web interface - no code knowledge required!

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Understanding Your Files](#understanding-your-files)
3. [Editing Text Content](#editing-text-content)
4. [Adding/Updating Academic Publications](#addingupdating-academic-publications)
5. [Adding Opinion Pieces with Images](#adding-opinion-pieces-with-images)
6. [Adding Blog Posts](#adding-blog-posts)
7. [Adding Photos to Gallery](#adding-photos-to-gallery)
8. [Updating Teaching Experience](#updating-teaching-experience)
9. [Updating Awards & Honors](#updating-awards--honors)
10. [Adding/Updating Podcast Videos](#addingupdating-podcast-videos)
11. [Saving Your Changes](#saving-your-changes)

---

## Getting Started

### Accessing Your Files on GitHub

1. Go to [github.com](https://github.com) and log in to your account
2. Navigate to your repository (e.g., `ninienowrin/avia-nahreen-portfolio`)
3. You'll see all your files listed

### Main Files You'll Edit:

- **`index.html`** - This is your main website file (contains all your content)
- **`images/`** folder - Contains all images
  - **`images/gallery/`** - Your photo gallery images
  - **`images/opinion-pieces/`** - Images for opinion pieces

---

## Understanding Your Files

**`index.html`** is the most important file - it contains all your website content:
- Bio and introduction
- Publications list
- Opinion pieces
- Blog posts
- Gallery photos
- Teaching experience
- Awards
- Contact information

You'll edit this file in the browser using GitHub's built-in editor.

---

## Editing Text Content

### Step-by-Step: Updating Your Bio

1. On GitHub, click on `index.html` file
2. Click the **pencil icon** (✏️) in the top right corner (it says "Edit this file")
3. Find your bio text - search for "Ph.D. Candidate in Geography"
4. Edit the text between the `<p>` tags
5. Scroll down to the bottom of the page
6. Click **"Commit changes"** button
7. Add a description like "Updated bio"
8. Click **"Commit changes"** again
9. Your site will update automatically within a few minutes!

### Updating Your Email Address

1. Open `index.html` in edit mode (click pencil icon)
2. Search for "avianahreen@gmail.com"
3. Replace with your new email address (in both places - the link and the visible text)
4. Commit changes at the bottom

---

## Adding/Updating Academic Publications

### Adding a New Publication:

1. Open `index.html` and click the **pencil icon** to edit
2. Search for "<!-- Academic Tab -->"
3. Find an existing publication entry that looks like this:
   ```html
   <div class="writing-item">
       <a href="https://example.com/paper" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="writing-link-full">
           <h3>Paper Title</h3>
           <div class="writing-meta">Author Names (Year) • Journal Name</div>
       </a>
   </div>
   ```
4. Copy that entire block (from `<div class="writing-item">` to `</div>`)
5. Paste it right after another publication
6. Replace:
   - The URL in `href="..."` with your paper's link
   - The text inside `<h3>` tags with your paper title
   - The text inside the `<div class="writing-meta">` with your citation
7. Scroll down and click **"Commit changes"**

### Removing a Publication:

1. Find the publication entry in `index.html`
2. Delete the entire `<div class="writing-item">...</div>` block
3. Commit changes

---

## Adding Opinion Pieces with Images

### Step 1: Upload the Image

1. On GitHub, navigate to the `images/` folder
2. Click on `opinion-pieces/` folder
3. Click **"Add file"** → **"Upload files"**
4. Drag and drop your image, or click to browse
5. Scroll down and click **"Commit changes"**
6. **Copy the exact filename** (e.g., `my-article.jpg`)

### Step 2: Add the Opinion Piece to Your Website

1. Open `index.html` and click the **pencil icon** to edit
2. Search for "<!-- Opinion Pieces Tab -->"
3. Find an existing opinion piece entry - it looks like:
   ```html
   <div class="writing-item opinion-item">
       <div class="opinion-content">
           <div class="opinion-image-wrapper">
               <img src="images/opinion-pieces/IMAGE_FILENAME.jpg" alt="Article Title" class="opinion-image" onerror="this.style.display='none'">
           </div>
           <div class="opinion-text">
               <a href="ARTICLE_URL" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="writing-link-full">
                   <h3>Article Title</h3>
                   <div class="writing-meta">The Daily Star</div>
               </a>
           </div>
       </div>
   </div>
   ```
4. Copy this entire block
5. Paste it where you want it (before or after other pieces)
6. Replace:
   - `IMAGE_FILENAME.jpg` with your actual image filename
   - `ARTICLE_URL` with the link to your article
   - `Article Title` with your article title
   - `The Daily Star` with the publication name if different
7. Commit changes

**Important:** Make sure the image filename in the code exactly matches the file you uploaded (including the extension: .jpg, .jpeg, .png, .webp)

---

## Adding Blog Posts

1. Open `index.html` and click the **pencil icon**
2. Search for "<!-- Personal Blog Tab -->"
3. You'll see a placeholder text. Replace it with:
   ```html
   <div class="writing-item">
       <a href="YOUR_BLOG_POST_URL" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="writing-link-full">
           <h3>Your Blog Post Title</h3>
           <div class="writing-meta">Date • Category</div>
           <div class="writing-description">Brief description of your blog post...</div>
       </a>
   </div>
   ```
4. Replace:
   - `YOUR_BLOG_POST_URL` with the link
   - `Your Blog Post Title` with the title
   - `Date • Category` with the date and category
   - Add a description if you want
5. For multiple blog posts, repeat this block
6. Commit changes

---

## Adding Photos to Gallery

### Step 1: Upload the Photo

1. Go to `images/gallery/` folder on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Upload your photo
4. **Copy the filename** (e.g., `my-photo.jpg`)
5. Commit the upload

### Step 2: Add Photo to Gallery

1. Open `index.html` and click the **pencil icon**
2. Search for "<!-- Gallery Section -->"
3. Find the gallery grid section
4. Find an existing gallery item:
   ```html
   <div class="gallery-item">
       <img src="images/gallery/PHOTO_FILENAME.jpg" alt="Photo" class="gallery-image">
   </div>
   ```
5. Copy this block
6. To show it immediately (in the first 6):
   - Paste it with other visible items (before any `gallery-item-hidden` items)
7. To hide it initially (users click "See More" to view):
   - Paste it and add `gallery-item-hidden` to the class:
   ```html
   <div class="gallery-item gallery-item-hidden">
       <img src="images/gallery/PHOTO_FILENAME.jpg" alt="Photo" class="gallery-image">
   </div>
   ```
8. Replace `PHOTO_FILENAME.jpg` with your actual filename
9. Commit changes

---

## Updating Teaching Experience

1. Open `index.html` and click the **pencil icon**
2. Search for "<!-- Teaching Experience Section -->"
3. Find an existing entry:
   ```html
   <div class="experience-card">
       <div class="experience-term">Fall 2025</div>
       <div class="experience-course">Course Name (Course Code)</div>
       <div class="experience-instructor">Course Instructor: Dr. Name</div>
       <div class="experience-duties">Teaching duties: Description</div>
   </div>
   ```
4. Copy this block and paste it where you want
5. Update all the information
6. Commit changes

---

## Updating Awards & Honors

1. Open `index.html` and click the **pencil icon**
2. Search for "<!-- Awards & Honors Section -->"
3. Find an existing award entry:
   ```html
   <div class="award-card">
       <div class="award-name">Award Name</div>
       <div class="award-period">2024-2025</div>
       <div class="award-org">Organization Name</div>
   </div>
   ```
4. Copy and paste to add new awards
5. Update the information
6. Commit changes

---

## Adding/Updating Podcast Videos

1. Open your YouTube video
2. Copy the video ID from the URL:
   - URL looks like: `https://www.youtube.com/watch?v=VIDEO_ID`
   - Copy just the part after `v=` (the VIDEO_ID)
3. Open `index.html` and click the **pencil icon**
4. Search for "<!-- Podcasts Section -->"
5. Find an existing podcast video entry:
   ```html
   <div class="podcast-video-item">
       <div class="podcast-video-wrapper">
           <iframe 
               src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen
               class="podcast-video">
           </iframe>
       </div>
   </div>
   ```
6. Copy this block to add a new video
7. Replace `VIDEO_ID_HERE` with your actual video ID
8. Commit changes

---

## Saving Your Changes

### How to Commit Changes on GitHub:

1. After editing a file, scroll to the bottom of the page
2. You'll see a box that says **"Commit changes"**
3. In the first box, write a brief description of what you changed:
   - Examples:
     - "Added new opinion piece"
     - "Updated bio text"
     - "Added gallery photos"
     - "Updated email address"
4. (Optional) Add more details in the larger box below
5. Click the green **"Commit changes"** button
6. **That's it!** Your changes are saved and your website will update automatically

### Important Notes:

- **Your site updates automatically** - Once you commit changes, your live website will update within 2-5 minutes
- **You can undo changes** - If you make a mistake, you can view the file history and revert to a previous version
- **Preview before saving** - You can scroll through the file in edit mode to see what you're changing before committing

---

## Quick Tips

### Finding Text Quickly:
- Use `Ctrl+F` (or `Cmd+F` on Mac) to search for specific text in the file
- Search for section headers like "<!-- Academic Tab -->" or "<!-- Gallery Section -->"

### Copying Existing Entries:
- Find an entry similar to what you want to add
- Copy the entire block from opening `<div>` to closing `</div>`
- Paste it and then edit the content inside

### File Names for Images:
- Use lowercase letters
- Use hyphens instead of spaces: `my-photo.jpg` not `my photo.jpg`
- Keep names simple: `article-title.jpg` is better than `my_article_final_version_2024.jpg`

### Image Formats:
- JPG/JPEG - Good for photos
- PNG - Good for graphics with transparency
- WebP - Good for smaller file sizes (modern browsers)

### Common Mistakes to Avoid:
- **Missing closing tags** - Make sure every `<div>` has a `</div>`
- **Wrong file paths** - Check that image paths match exactly: `images/gallery/photo.jpg`
- **Forgot to commit** - Always scroll down and click "Commit changes"!

---

## Troubleshooting

### My changes aren't showing on the website:
- Wait 2-5 minutes for the site to update
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that you clicked "Commit changes" at the bottom

### I made a mistake:
- You can edit the file again and fix it
- Or click "History" button to see past versions and revert

### Image not showing:
- Check the filename matches exactly (including .jpg vs .jpeg)
- Make sure the image is in the correct folder
- Check the path in the code matches the folder structure

### Can't find what I'm looking for:
- Use the search function (Ctrl+F) to search for keywords
- Look for section headers like `<!-- Gallery Section -->`
- Check the table of contents at the top of this guide

---

## Need Help?

### Finding Sections in index.html:

Search for these keywords to find sections quickly:
- **Bio**: "hero-subtitle" or "Ph.D. Candidate"
- **Email**: "contact-email" or "avianahreen@gmail.com"
- **Publications**: "<!-- Academic Tab -->"
- **Opinion Pieces**: "<!-- Opinion Pieces Tab -->"
- **Blog**: "<!-- Personal Blog Tab -->"
- **Gallery**: "<!-- Gallery Section -->"
- **Teaching**: "<!-- Teaching Experience Section -->"
- **Awards**: "<!-- Awards & Honors Section -->"
- **Podcasts**: "<!-- Podcasts Section -->"
- **Contact**: "<!-- Contact Section -->"

---

## Step-by-Step Example: Adding an Opinion Piece

Let's walk through adding a complete opinion piece:

1. **Upload the image:**
   - Go to `images/opinion-pieces/` folder
   - Click "Add file" → "Upload files"
   - Upload `my-new-article.jpg`
   - Commit the upload

2. **Open index.html:**
   - Click on `index.html`
   - Click the pencil icon (✏️) to edit

3. **Find the opinion pieces section:**
   - Press Ctrl+F and search: `<!-- Opinion Pieces Tab -->`

4. **Find an existing entry:**
   - Look for a block that starts with `<div class="writing-item opinion-item">`

5. **Copy the entire block:**
   - Copy from `<div class="writing-item opinion-item">` all the way to `</div>`

6. **Paste it:**
   - Paste it right after another opinion piece (before the closing tags)

7. **Edit it:**
   - Replace `IMAGE_FILENAME.jpg` with `my-new-article.jpg`
   - Replace `ARTICLE_URL` with `https://www.thedailystar.net/...`
   - Replace `Article Title` with your actual title
   - Replace `The Daily Star` if needed

8. **Save:**
   - Scroll to bottom
   - Type "Added new opinion piece" in the commit box
   - Click "Commit changes"

9. **Done!** Your site will update in a few minutes.

---

**Last Updated:** January 2026

**Remember:** Take your time, double-check file names, and always commit your changes!
