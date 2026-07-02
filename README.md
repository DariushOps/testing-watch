# DOW Luxury Watch Store

A modern React application for browsing luxury watches, exploring featured brands, and experiencing a smooth, interactive eCommerce interface. The app provides a clean, responsive UI for both desktop and mobile devices and is optimized for performance.

**Live demo:** [dow-watch-store.vercel.app](https://dow-watch-store.vercel.app/)

## Features

- ⌚ Browse watches with detailed descriptions and prices
- 🏷️ Explore featured brands with interactive cards
- 🎞️ Hero slider for promotions and highlights
- 💬 Testimonials section for customer reviews
- 🧑‍💼 "Consult with Experts" section
- 📱 Fully responsive design for desktop, tablet, and mobile
- 🛒 Add, remove, and manage items in a shopping cart
- 🔄 Dynamic cart state managed with Redux Toolkit
- 🌐 Fetch product data from a remote API using Axios
- 🧩 Modular React components for easy customization
- ✨ Smooth animations with Framer Motion
- 🚀 Ready for deployment on Vercel or Netlify

## Tech Stack

**Frontend:** React 19+, Vite, Tailwind CSS

**State Management:** Redux Toolkit (cart), Context API / useReducer (optional global state)

**Data Fetching:** Axios

**Animations:** Framer Motion

**Routing:** React Router v6

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/CoraxMuninn/dow-watch-store.git
   cd dow-watch-store
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

   Open the local URL shown in your terminal (typically [http://localhost:5173](http://localhost:5173)) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## How It Works

- The **Home Page** displays featured watches, brand highlights, and an interactive hero slider.
- The **Shop Page** allows users to browse available watches and explore detailed information for each product.
- Global cart state is managed with **Redux Toolkit**, while other optional/local state uses Context API and `useReducer`.
- Dynamic animations and interactive components are implemented with **Framer Motion**, providing smooth transitions and an enhanced user experience.
- The application is fully responsive, adapting to mobile, tablet, and desktop layouts.

## Project Structure

```
dow-watch-store/
├── public/              # Static assets
├── src/                 # Application source code
│   ├── components/      # Reusable UI components
│   ├── pages/            # Page-level components (Home, Shop, etc.)
│   ├── redux/            # Redux Toolkit store and slices
│   └── hooks/             # Custom React hooks
├── dataTest.js          # Sample/test data
├── vite.config.js       # Vite configuration
└── vercel.json          # Vercel deployment configuration
```
