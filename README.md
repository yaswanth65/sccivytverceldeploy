# SCIVYT Next.js Application

A modern, responsive website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Next.js 14 (App Router)
- 📱 Fully responsive design
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- 📄 Multiple pages: Home, About, Products, Contact

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:

```bash
cd scivyt-nextjs
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
scivyt-nextjs/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Pages

- **Home** (`/`) - Landing page with hero section, services showcase, stats, and contact form
- **About** (`/about`) - Team information, company timeline, and statistics
- **Products** (`/products`) - Product showcase with detailed information
- **Contact** (`/contact`) - Contact form and office location

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

### Content

Update the content in each page component located in the `app/` directory.

### Images

Replace placeholder images with your actual images in the `public/` directory and update the image paths in the components.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## License

MIT License
