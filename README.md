# Karapitiya Home Stay Apartment

A modern, SEO-optimized Next.js website for Karapitiya Home Stay Apartment - premium student accommodation near Karapitiya Teaching Hospital, Galle, Sri Lanka.

## Features

✨ **Modern Design**: Beautiful gradient color scheme with smooth animations and transitions
🎯 **SEO Optimized**: Targeted for medical students at Karapitiya Hospital
📱 **Fully Responsive**: Perfect viewing on all devices
🚀 **Fast Performance**: Built with Next.js 14 and optimized for speed
🎨 **Creative Animations**: Framer Motion powered smooth transitions
⭐ **Airbnb Integration**: Prominent CTA for direct bookings

## Sections

- **Hero**: Eye-catching landing with animated elements
- **About**: Information about the homestay and its location
- **Facilities**: 12+ amenities with icons and descriptions
- **Gallery**: Interactive photo gallery with lightbox
- **Things to Do**: Galle attractions and Karapitiya Hospital highlight
- **Reviews**: Authentic guest testimonials
- **Airbnb CTA**: Prominent booking section
- **Contact**: Contact form with location details

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations and transitions

## Getting Started

### Install Dependencies

\`\`\`powershell
npm install
\`\`\`

### Run Development Server

\`\`\`powershell
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`powershell
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
karapitiya-homestay/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main page
│   │   ├── globals.css     # Global styles
│   │   ├── sitemap.ts      # SEO sitemap
│   │   └── robots.ts       # SEO robots.txt
│   └── components/
│       ├── Navbar.tsx      # Navigation bar
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Facilities.tsx  # Facilities section
│       ├── Gallery.tsx     # Photo gallery
│       ├── ThingsToDo.tsx  # Attractions section
│       ├── Reviews.tsx     # Reviews section
│       ├── AirbnbCTA.tsx   # Airbnb booking CTA
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
\`\`\`

## SEO Keywords

- Karapitiya accommodation
- Medical student housing Galle
- Karapitiya hospital homestay
- Student apartment near Karapitiya
- Galle homestay
- Foreign student accommodation Sri Lanka
- Karapitiya teaching hospital accommodation

## Customization

### Update Contact Information

Edit `src/components/Contact.tsx` and `src/components/Footer.tsx` to add real contact details.

### Add Real Images

Replace placeholder images in:
- `src/components/Gallery.tsx`
- `src/components/About.tsx`
- `src/components/Hero.tsx`

### Configure Airbnb Link

Update the Airbnb URL in `src/components/AirbnbCTA.tsx` with your actual listing.

### Adjust Colors

Modify `tailwind.config.js` to change the color scheme.

## Performance Tips

- Images are optimized using Next.js Image component
- Lazy loading for sections using Intersection Observer
- Minimal dependencies for fast load times
- Server-side rendering for better SEO

## License

All rights reserved © 2025 Karapitiya Home Stay Apartment

## Support

For questions or support, contact: info@karapitiyahomestay.com
