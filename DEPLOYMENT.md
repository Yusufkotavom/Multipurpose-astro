# Deployment Guide - Astro Business Indonesia

## 🚀 Deployment yang Diperbaiki

Error sebelumnya telah diperbaiki dengan mengoptimalkan konfigurasi deployment.

### ✅ Konfigurasi yang Diperbaiki

#### 1. Vercel Configuration (`vercel.json`)
```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

**Perubahan:**
- ✅ Menghapus konfigurasi `functions` yang menyebabkan error
- ✅ Menyederhanakan konfigurasi untuk static site
- ✅ Menghapus headers yang tidak diperlukan

#### 2. Astro Configuration (`astro.config.mjs`)
```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  output: 'static',
  trailingSlash: 'never'
});
```

**Perubahan:**
- ✅ Menghapus `experimental.assets` yang bisa menyebabkan masalah
- ✅ Menambahkan `output: 'static'` untuk memastikan static generation
- ✅ Menambahkan `trailingSlash: 'never'` untuk konsistensi URL

#### 3. Vercel Ignore (`.vercelignore`)
```bash
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
.astro/

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
```

## 🚀 Deployment Steps

### Vercel Deployment

#### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? [your-account]
# - Link to existing project? N
# - What's your project's name? astro-business-indonesia
# - In which directory is your code located? ./
# - Want to override the settings? N
```

#### Method 2: GitHub Integration
1. Push code ke GitHub
2. Login ke [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import repository dari GitHub
5. Vercel akan otomatis detect Astro framework
6. Click "Deploy"

### Netlify Deployment

#### Method 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

#### Method 2: Netlify Dashboard
1. Build project: `npm run build`
2. Login ke [Netlify Dashboard](https://app.netlify.com/)
3. Drag & drop folder `dist/` ke Netlify
4. Atau connect repository dari GitHub

### GitHub Pages Deployment

#### Method 1: GitHub Actions
1. Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Push ke GitHub
3. Go to repository Settings > Pages
4. Set source to "GitHub Actions"

#### Method 2: Manual
```bash
# Build project
npm run build

# Create gh-pages branch
git checkout -b gh-pages

# Remove everything except dist
git rm -rf .
git checkout main -- dist

# Move dist contents to root
mv dist/* .
rmdir dist

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Go to repository Settings > Pages
# Set source to "Deploy from a branch"
# Select "gh-pages" branch
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Error: "Function Runtimes must have a valid version"
**Solution:** ✅ Fixed - Removed `functions` configuration from `vercel.json`

#### 2. Build Error: "No files found matching"
**Solution:** This is normal for empty content directories. Add content files or ignore the warning.

#### 3. Deployment Error: "Build command failed"
**Solution:**
```bash
# Check if build works locally
npm run build

# Check Node.js version
node --version  # Should be 16+ or 18+

# Clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 4. 404 Errors on Vercel
**Solution:**
- Ensure `output: 'static'` in `astro.config.mjs`
- Check that all pages are in `src/pages/`
- Verify `vercel.json` has correct `outputDirectory`

#### 5. CSS Not Loading
**Solution:**
- Check that Tailwind CSS is properly configured
- Ensure `@tailwindcss/vite` plugin is in `astro.config.mjs`
- Verify CSS imports in `src/styles/global.css`

### Environment Variables

#### Vercel
1. Go to Vercel Dashboard > Project Settings > Environment Variables
2. Add variables:
   ```
   SITE_URL=https://your-domain.com
   SITE_NAME=Your Site Name
   SITE_DESCRIPTION=Your site description
   ```

#### Netlify
1. Go to Netlify Dashboard > Site Settings > Environment Variables
2. Add the same variables as above

### Performance Optimization

#### 1. Enable Compression
Add to `vercel.json`:
```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Encoding",
          "value": "gzip"
        }
      ]
    }
  ]
}
```

#### 2. Cache Static Assets
Add to `vercel.json`:
```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## ✅ Verification

### Pre-Deployment Checklist
- [ ] `npm run build` succeeds locally
- [ ] No TypeScript errors
- [ ] All pages render correctly
- [ ] Images and assets load properly
- [ ] SEO meta tags are present
- [ ] Responsive design works on mobile

### Post-Deployment Checklist
- [ ] Website loads without errors
- [ ] All pages are accessible
- [ ] Images and assets load
- [ ] Contact forms work (if applicable)
- [ ] SEO meta tags are correct
- [ ] Performance is good (Lighthouse score 90+)

## 📊 Monitoring

### Vercel Analytics
- Go to Vercel Dashboard > Analytics
- Monitor Core Web Vitals
- Check for 404 errors

### Google Analytics
- Add Google Analytics ID to `config/site.config.ts`
- Monitor user behavior and performance

### Performance Monitoring
- Use Lighthouse CI for automated performance testing
- Monitor Core Web Vitals in Google Search Console
- Set up alerts for performance regressions

## 🆘 Support

If you encounter issues:

1. **Check Build Logs** - Look for specific error messages
2. **Test Locally** - Ensure `npm run build` works
3. **Check Dependencies** - Update packages if needed
4. **Review Configuration** - Verify all config files are correct
5. **Check Documentation** - Refer to Astro and Vercel docs

### Useful Links
- [Astro Documentation](https://docs.astro.build/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://pages.github.com/)