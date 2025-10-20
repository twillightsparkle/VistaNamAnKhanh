# Khu Đô Thị Nam An Khánh - Landing Page

A modern, responsive landing page for Nam An Khánh Urban Township - a premium real estate project in Hanoi, Vietnam.

## Project Overview

This is a static Next.js website showcasing the Nam An Khánh Sudico real estate development project. The site features:

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Real Estate Content**: Complete information about villas, shophouses, and townhouses
- **Vietnamese Language**: All content in Vietnamese for local audience
- **Static Export**: Fully static site compatible with GitHub Pages
- **Modern UI**: Clean, professional design with Tailwind CSS

## Features

- 🏡 **Property Showcase**: Detailed information about villas, shophouses, and townhouses
- 📍 **Location Details**: Interactive maps and transportation connectivity
- 🏗️ **Project Phases**: Complete development timeline and phases
- 💰 **Pricing Information**: Latest pricing and available units
- 📱 **Contact Integration**: Direct hotline and email contact
- 🌐 **SEO Optimized**: Meta tags and Open Graph for social sharing

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Static Export** - For GitHub Pages deployment

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
# Build and export static files
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

This site is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Push to `main` branch triggers GitHub Actions
2. **Manual Setup**: 
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - The workflow will automatically build and deploy

### GitHub Pages Setup

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push changes to `main` branch
4. Site will be available at: `https://yourusername.github.io/bietthu/`

## Content

All content is sourced from the official Nam An Khánh project information:

- **Developer**: Sudico (Song Da Urban & Industrial Development JSC)
- **Location**: An Khanh & An Thuong communes, Hoai Duc, Hanoi
- **Scale**: 234.4 hectares, 1,793 low-rise housing units
- **Products**: Villas, townhouses, shophouses
- **Contact**: 0942.993.886

## File Structure

```
src/
├── app/
│   ├── layout.tsx     # Root layout with metadata
│   ├── page.tsx       # Main landing page
│   └── globals.css    # Global styles
public/                # Static assets
.github/
├── workflows/
│   └── deploy.yml     # GitHub Actions deployment
└── copilot-instructions.md
```

## Customization

To customize the content:

1. **Edit Content**: Modify `src/app/page.tsx` for main content
2. **Update Metadata**: Change title/description in `src/app/layout.tsx`
3. **Styling**: Adjust Tailwind classes or `src/app/globals.css`
4. **Images**: Replace image URLs with your own assets

## Contact Information

- **Hotline**: 0984 704 988
- **Email**: trangbinhduong2017@gmail.com
- **Project**: Khu Đô Thị Nam An Khánh Sudico

---
Remember to change the image path to match the repo name, and the base path in next config

Built with ❤️ using Next.js and Tailwind CSS.
