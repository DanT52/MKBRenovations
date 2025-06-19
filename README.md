# MKB Renovations Website

A modern, professional website for MKB Renovations LLC, specializing in kitchen and bathroom renovations in Minnehaha, Washington.

## Features

- **Modern Design**: Clean, professional layout with mobile-first responsive design
- **React + Vite**: Fast development and build process
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Interactive Components**:
  - Image carousel showcasing renovation projects
  - Customer review slider
  - Floating contact button
  - Contact form modal
  - Responsive navigation with phone number
- **Multiple Pages**:
  - Home page with hero section, services, gallery, and reviews
  - About page featuring Mark Pavliuk and company values
  - Projects page (placeholder for future portfolio)

## Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.10
- **Routing**: React Router DOM 7.6.2
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 18.18.0 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mkb_Plain
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation bar with logo and phone number
│   ├── Hero.jsx        # Hero section with background image
│   ├── Services.jsx    # Services overview section
│   ├── ImageCarousel.jsx # Project showcase carousel
│   ├── ReviewsSection.jsx # Customer reviews component
│   ├── Footer.jsx      # Site footer
│   ├── FloatingContactButton.jsx # Floating contact CTA
│   └── ContactModal.jsx # Contact form modal
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   └── Projects.jsx    # Projects page (placeholder)
├── data/               # Static data
│   └── reviews.js      # Customer review data
├── App.jsx             # Main app component with routing
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports

public/
├── img/               # Images and assets
│   ├── MKBLOGO.png    # Company logo
│   ├── Hero.JPG       # Hero background image
│   ├── mark.webp      # Mark's headshot
│   └── showcase/      # Project showcase images
│       ├── kitchen/   # Kitchen renovation photos
│       └── Bathroom/  # Bathroom renovation photos
└── index.html         # HTML template
```

## Business Information

- **Company**: MKB Renovations LLC
- **Owner**: Mark Pavliuk
- **Location**: Minnehaha, Washington
- **Phone**: (360) 991-7646
- **Specialties**: Kitchen and Bathroom Renovations




