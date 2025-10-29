# Adidi Ludo Landing Page

A high-converting, promotional landing page for Adidi Ludo - Nigeria's premier Ludo betting game application.

## Overview

This landing page is designed to drive app downloads from iOS and Android app stores by showcasing the compelling value proposition of playing Ludo and winning real Naira. Built specifically for the Nigerian market with localized messaging, currency, and payment methods.

## Features

- **Hero Section** - Eye-catching headline with animated background and download CTAs
- **Benefits Section** - 4 key value propositions with engaging visuals
- **How It Works** - 3-step process to get started
- **Game Modes** - Showcase of different playing options (Quick Match, Tournaments, Practice, Private Rooms)
- **Winning Potential** - Prize tiers from beginner to expert level
- **Security & Trust** - Security features and payment partner badges
- **Payment Methods** - Nigerian-focused payment options
- **FAQ** - Accordion-style frequently asked questions
- **Final CTA** - Strong call-to-action with download buttons
- **Footer** - Links, contact info, and legal information

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library

## Theme

The landing page uses the existing Adidi Ludo theme:

- **Primary Colors**: Deep Plum Burgundy (#3D1A4D)
- **Accent Colors**: Magenta (#E91E8C), Orange (#FF9234), Gold (#FFD700), Cyan (#00D9FF)
- **Ludo Colors**: Blue, Red, Yellow, Green
- **Typography**: Inter font family with various weights

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
Adidi_Ludo_Landing_Page/
├── src/
│   ├── components/
│   │   ├── Hero.tsx                 # Hero section with animated background
│   │   ├── DownloadButtons.tsx      # Reusable app store buttons
│   │   ├── Benefits.tsx             # Key benefits section
│   │   ├── HowItWorks.tsx           # 3-step process
│   │   ├── GameModes.tsx            # Game modes showcase
│   │   ├── WinningPotential.tsx     # Prize tiers and testimonials
│   │   ├── SecurityTrust.tsx        # Security features
│   │   ├── PaymentMethods.tsx       # Payment options
│   │   ├── FAQ.tsx                  # FAQ accordion
│   │   ├── FinalCTA.tsx             # Final call-to-action
│   │   └── Footer.tsx               # Footer with links
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # App entry point
│   └── index.css                    # Global styles
├── theme/
│   ├── colors.ts                    # Color palette
│   ├── typography.ts                # Typography system
│   ├── spacing.ts                   # Spacing and shadows
│   └── index.ts                     # Theme export
├── index.html                       # HTML template
├── tailwind.config.js               # Tailwind configuration
├── vite.config.ts                   # Vite configuration
└── package.json                     # Dependencies
```

## Nigerian Market Optimization

- **Currency**: All amounts displayed in Naira (₦)
- **Payment Methods**: Bank transfer, cards, USSD, mobile money
- **Language**: Nigerian English with local expressions ("No Wahala")
- **Trust Signals**: Licensed, secure, 18+ verification
- **Mobile-First**: Optimized for mobile devices (primary Nigerian access method)

## SEO & Performance

- Meta tags optimized for search engines
- Open Graph tags for social sharing
- Fast loading times (<2 seconds target)
- Lazy loading for images
- Optimized animations (60fps)

## Customization

### Update App Store Links

Replace placeholder links in `src/components/DownloadButtons.tsx`:

```tsx
href="#" // Replace with actual iOS App Store URL
href="#" // Replace with actual Google Play Store URL
```

### Update Contact Information

Replace placeholder contact info in `src/components/Footer.tsx`:

```tsx
support@adidiludo.ng  // Update with actual email
+234 123 456 7890     // Update with actual phone number
```

### Update Social Media Links

Replace placeholder social links in `src/components/Footer.tsx`:

```tsx
href="https://facebook.com"  // Update with actual Facebook page
href="https://twitter.com"   // Update with actual Twitter/X account
href="https://instagram.com" // Update with actual Instagram profile
href="https://youtube.com"   // Update with actual YouTube channel
```

## Analytics Integration

To add Google Analytics or other tracking:

1. Add tracking script to `index.html`
2. Add event tracking to CTA buttons
3. Track scroll depth and section views
4. Monitor conversion rates for downloads

## Deployment

The built static files can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repo
- **AWS S3 + CloudFront**: Upload build folder
- **GitHub Pages**: Use gh-pages package

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Proprietary - All rights reserved by Adidi Ludo

## Support

For questions or issues, contact: support@adidiludo.ng

---

**Made with ❤️ for Nigeria** 🇳🇬
