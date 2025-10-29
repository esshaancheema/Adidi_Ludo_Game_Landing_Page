# Quick Start Guide - Adidi Ludo Landing Page

Get your landing page running in 5 minutes!

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

Visit: `http://localhost:5173`

## Step 3: Make Essential Updates (2 minutes)

### Update Download Links
**File**: `src/components/DownloadButtons.tsx`

Find and replace:
```tsx
href="#"  // Line ~15 (iOS)
href="#"  // Line ~38 (Android)
```

With your actual app store URLs.

### Update Contact Info
**File**: `src/components/Footer.tsx`

Replace:
- `support@adidiludo.ng` → Your email
- `+234 123 456 7890` → Your phone

## Step 4: Build for Production (1 minute)

```bash
npm run build
```

Output will be in the `dist` folder.

## Step 5: Deploy (30 seconds)

Upload the `dist` folder to your hosting service.

**Recommended Hosts**:
- Vercel (easiest): `vercel deploy`
- Netlify: Drag & drop `dist` folder
- Any web host: Upload to public_html

---

## That's It! 🎉

Your landing page is now live and ready to convert visitors!

## Next Steps (Optional)

1. Add Google Analytics
2. Update social media links
3. Create legal pages
4. Add custom favicon
5. Set up A/B testing

## Need More Detail?

- **Setup Guide**: See `SETUP.md`
- **Full Documentation**: See `README.md`
- **Pre-Launch Checklist**: See `PRE_LAUNCH_CHECKLIST.md`
- **Page Structure**: See `PAGE_STRUCTURE.md`

## Support

Questions? Check the FAQ or email: support@adidiludo.ng

---

**Happy Launching!** 🚀
