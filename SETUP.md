# Quick Setup Guide for Adidi Ludo Landing Page

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- React & React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at: `http://localhost:5173`

## Before Going Live - Required Updates

### 1. App Store Links

**File**: `src/components/DownloadButtons.tsx`

Update the placeholder links with your actual app store URLs:

```tsx
// Line 15-16 (iOS)
href="YOUR_IOS_APP_STORE_URL"

// Line 38-39 (Android)
href="YOUR_GOOGLE_PLAY_STORE_URL"
```

### 2. Contact Information

**File**: `src/components/Footer.tsx`

Update contact details:

```tsx
// Email (around line 114)
support@adidiludo.ng → your-actual-email@domain.com

// Phone (around line 125)
+234 123 456 7890 → your-actual-phone-number
```

### 3. Social Media Links

**File**: `src/components/Footer.tsx`

Update social media URLs (lines 22-50):

```tsx
href="https://facebook.com/your-page"
href="https://twitter.com/your-handle"
href="https://instagram.com/your-profile"
href="https://youtube.com/your-channel"
```

### 4. Legal Pages

Create and link your legal documents:
- Terms & Conditions
- Privacy Policy
- Responsible Gaming Policy
- Fair Play Policy
- KYC Guidelines

Update links in `src/components/Footer.tsx` (lines 67-91)

### 5. Analytics (Optional but Recommended)

**File**: `index.html`

Add your Google Analytics or tracking code before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 6. Favicon

Replace `/vite.svg` in `index.html` with your actual favicon:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

Add your favicon file to the `public` folder.

### 7. Meta Tags for SEO

**File**: `index.html`

Update meta tags with specific information:

```html
<meta property="og:image" content="URL_TO_SOCIAL_SHARE_IMAGE" />
<meta property="og:url" content="YOUR_WEBSITE_URL" />
```

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

This creates optimized files in the `dist` folder.

### 2. Preview Production Build Locally

```bash
npm run preview
```

### 3. Deploy

Upload the `dist` folder contents to your hosting service:

- **Vercel**: Connect GitHub repo or use Vercel CLI
- **Netlify**: Drag and drop `dist` folder or connect repo
- **AWS S3**: Upload to S3 bucket and configure CloudFront
- **cPanel/Traditional Hosting**: Upload to public_html

## Testing Checklist

Before launching, test the following:

- [ ] All app store download buttons work
- [ ] All social media links are correct
- [ ] Contact email and phone are working
- [ ] All sections display correctly on mobile
- [ ] All sections display correctly on tablet
- [ ] All sections display correctly on desktop
- [ ] Animations run smoothly (60fps)
- [ ] Page loads in under 2 seconds
- [ ] FAQ accordion opens/closes properly
- [ ] All links in footer work
- [ ] Analytics tracking is working

## Performance Optimization

The landing page is already optimized with:

- Lazy loading for images
- Optimized animations (Framer Motion)
- Minimal JavaScript bundle size
- Tailwind CSS purging unused styles
- Fast development server (Vite)

## Mobile Optimization

The page is mobile-first and fully responsive:

- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly button sizes
- Optimized for Nigerian mobile users
- Works on slow 3G connections

## Nigerian Market Features

Already included:
- ✅ Naira (₦) currency throughout
- ✅ Nigerian payment methods (Paystack, Flutterwave, USSD)
- ✅ Local language ("No Wahala", Nigerian English)
- ✅ Mobile-first design
- ✅ 18+ age verification messaging
- ✅ Licensed and regulated messaging

## Need Help?

If you encounter any issues:

1. Check that Node.js version is 18+: `node --version`
2. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Clear Vite cache: `rm -rf node_modules/.vite`
4. Check browser console for errors

## Environment Variables (Optional)

If you want to use environment variables for API keys:

Create `.env.local`:

```
VITE_GA_ID=your-google-analytics-id
VITE_API_URL=your-api-url
```

Access in code:

```tsx
const gaId = import.meta.env.VITE_GA_ID;
```

---

**Ready to Launch!** 🚀

Once you've completed all the updates above, your landing page is ready to drive downloads for Adidi Ludo!
