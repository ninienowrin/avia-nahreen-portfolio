# Fixing Vercel Deployment

## Issue: Changes not showing on Vercel

### Step 1: Verify Changes are Committed
Run these commands in your terminal:

```bash
cd /home/shahazadi/nahreen-portfolio
git status
```

If you see modified files, commit them:
```bash
git add .
git commit -m "Update: ocean blue accent color, water video background"
git push origin main
```

### Step 2: Check Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Find your project "avia-nahreen-portfolio"
3. Check the "Deployments" tab
4. Look for the latest deployment - is it showing as "Building" or "Error"?

### Step 3: Manual Redeploy
If needed, trigger a new deployment:
1. In Vercel dashboard, click on your project
2. Go to "Deployments" tab
3. Click the "..." menu on the latest deployment
4. Select "Redeploy"

### Step 4: Video File Issue
**Important**: The `images/water.mp4` file might be too large for GitHub (over 100MB limit).

**Solutions:**
1. **Option A**: Host video elsewhere (YouTube, Vimeo, Cloudinary) and embed
2. **Option B**: Use Git LFS for large files
3. **Option C**: Compress the video to under 10MB

### Step 5: Check Build Logs
In Vercel dashboard:
1. Click on the latest deployment
2. Check "Build Logs" for any errors
3. Common issues:
   - Missing files
   - Build timeout
   - File size limits

### Quick Fix Command
Run this to force push everything:
```bash
cd /home/shahazadi/nahreen-portfolio
git add -A
git commit -m "Update styles and add water video support"
git push origin main --force-with-lease
```

**Note**: Only use `--force-with-lease` if you're sure no one else has pushed changes.








