# Cloudflare + GitHub Pages Setup for dinelogy.com

## 🌐 Cloudflare DNS Configuration

### Step 1: Add DNS Records in Cloudflare Dashboard

1. **A Records for Root Domain (dinelogy.com):**
   ```
   Type: A, Name: @, Value: 185.199.108.153, Proxy: ⚡ Proxied
   Type: A, Name: @, Value: 185.199.109.153, Proxy: ⚡ Proxied
   Type: A, Name: @, Value: 185.199.110.153, Proxy: ⚡ Proxied
   Type: A, Name: @, Value: 185.199.111.153, Proxy: ⚡ Proxied
   ```

2. **CNAME Record for WWW:**
   ```
   Type: CNAME, Name: www, Value: harbinzhang.github.io, Proxy: ⚡ Proxied
   ```

### Step 2: Cloudflare SSL/TLS Settings

1. Go to **SSL/TLS → Overview**
2. Set encryption mode to **"Full"** (not Full strict initially)
3. Wait for SSL certificate to be issued (~15 minutes)
4. Later, you can upgrade to **"Full (strict)"** after GitHub Pages SSL is working

### Step 3: Additional Cloudflare Settings (Optional but Recommended)

1. **Speed → Optimization:**
   - Enable "Auto Minify" for HTML, CSS, JS
   - Enable "Brotli" compression

2. **Security → Settings:**
   - Set Security Level to "Medium" or "High"
   - Enable "Browser Integrity Check"

## 🚀 GitHub Pages Configuration

### Step 4: Deploy to GitHub Pages

1. **Deploy your site:**
   ```bash
   npm run deploy
   ```

2. **Enable custom domain in GitHub:**
   - Go to your repo: Settings → Pages
   - Under "Custom domain", enter: `dinelogy.com`
   - Check "Enforce HTTPS" (after DNS propagates)

### Step 5: Verification

1. **Check DNS propagation:**
   ```bash
   nslookup dinelogy.com
   dig dinelogy.com
   ```

2. **Test your site:**
   - http://dinelogy.com (should redirect to HTTPS)
   - https://dinelogy.com
   - https://www.dinelogy.com

## 🔧 Troubleshooting

### If site doesn't load:
1. Wait 10-15 minutes for DNS propagation
2. Try disabling Cloudflare proxy temporarily (gray cloud)
3. Check GitHub Pages status in repo settings

### If SSL errors occur:
1. Make sure Cloudflare SSL/TLS is set to "Full"
2. Wait for GitHub Pages to issue SSL certificate
3. Try "Always Use HTTPS" in Cloudflare → SSL/TLS → Edge Certificates

### Mixed content errors:
1. Make sure all assets use HTTPS
2. Check for hardcoded HTTP URLs in your code

## 📋 Final Checklist

- ✅ DNS A records pointing to GitHub Pages IPs
- ✅ CNAME record for www subdomain  
- ✅ Cloudflare SSL/TLS set to "Full"
- ✅ CNAME file contains "dinelogy.com"
- ✅ GitHub Pages custom domain configured
- ✅ Site accessible at both dinelogy.com and www.dinelogy.com

**Expected timeline:** 5-30 minutes for full propagation and SSL setup.