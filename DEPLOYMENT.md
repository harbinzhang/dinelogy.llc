# GitHub Pages Deployment Guide

## Setup Complete! 🎉

Your project is now configured for GitHub Pages deployment. Here are the steps to deploy:

## Routing Strategy Options

### Current Setup: BrowserRouter with 404.html fallback
- **Pros**: Clean URLs (`/product`, `/contact`)
- **Cons**: Requires 404.html workaround for GitHub Pages
- **Status**: ✅ Configured and ready

### Alternative: HashRouter (Simpler but with # in URLs)
- **Pros**: Works perfectly with GitHub Pages without any workarounds
- **Cons**: URLs include hash (`/#/product`, `/#/contact`)
- **To switch**: Rename `src/main-hashrouter.tsx` to `src/main.tsx`

## Method 1: Manual Deployment (Using gh-pages)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

   This will build your project and push it to the `gh-pages` branch.

## Method 2: Automatic Deployment (GitHub Actions)

The project includes a GitHub Actions workflow that automatically deploys when you push to the `main` branch.

### First-time setup:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/dinelogy.llc.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically run when you push to main

3. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/dinelogy.llc/`
   - It may take a few minutes for the first deployment

## Important Configuration

### If your repository has a different name:

1. Update `vite.config.ts`:
   ```typescript
   base: '/YOUR-REPO-NAME/',
   ```

2. Update `src/main.tsx`:
   ```typescript
   <BrowserRouter basename="/YOUR-REPO-NAME">
   ```

3. Update `public/404.html`:
   ```javascript
   var pathSegmentsToKeep = 1; // Keep this as 1 for project pages
   ```

### For custom domain (dinelogy.llc):

1. Create a `public/CNAME` file with your domain:
   ```
   dinelogy.llc
   ```

2. Update configurations to use root path:
   - `vite.config.ts`: `base: '/',`
   - `src/main.tsx`: `<BrowserRouter>` (remove basename)
   - `public/404.html`: `var pathSegmentsToKeep = 0;`

3. Configure DNS settings with your domain provider to point to GitHub Pages

## Troubleshooting

- **404 errors on routes:** The 404.html file handles client-side routing for SPAs on GitHub Pages
- **Build fails:** Make sure all dependencies are installed with `npm install`
- **Page not updating:** Clear browser cache or wait a few minutes for GitHub Pages to update
- **GitHub Actions fails:** Check the Actions tab in your repository for error logs