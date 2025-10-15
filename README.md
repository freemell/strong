# sTRONg Meme Scroll Animation

A meme-tastic scroll animation experience built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎭 Meme-themed scroll animations
- 📱 Responsive design
- 🎨 Beautiful gradient backgrounds
- ⚡ Smooth framer-motion animations
- 🖼️ Image carousel with your custom images

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install additional required packages:**
   ```bash
   npm install tailwindcss-animate
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ui/
│   │   └── container-scroll-animation.tsx  # Main scroll component
│   └── meme-scroll-demo.tsx               # Demo component
├── lib/
│   └── utils.ts             # Utility functions
├── images/                  # Your meme images
└── components.json          # shadcn/ui configuration
```

## Component Usage

The `ContainerScroll` component provides smooth scroll animations with:

- **titleComponent**: The content that appears above the animated card
- **children**: The content inside the animated card

## Why /components/ui?

The `/components/ui` folder follows shadcn/ui conventions:
- Centralized location for reusable UI components
- Consistent naming and structure
- Easy to find and maintain
- Follows design system best practices

## Customization

- Modify colors in `tailwind.config.ts`
- Update images in `/images` folder
- Customize animations in the component files
- Adjust responsive breakpoints as needed

## Dependencies

- **framer-motion**: For smooth animations
- **lucide-react**: For icons
- **tailwindcss**: For styling
- **next**: React framework
- **typescript**: Type safety

Enjoy your meme-tastic scroll experience! 🚀
