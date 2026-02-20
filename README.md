# 🍹 GSAP Cocktails Landing Page

A modern, animated cocktail landing page built with React, Vite, and GSAP. Features smooth scroll animations, parallax effects, and an interactive design showcasing cocktails with beautiful visual effects.

## ✨ Features

- **Smooth Scroll Animations**: GSAP ScrollTrigger for scroll-based animations
- **Split Text Effects**: Advanced text animation using GSAP SplitText
- **Parallax Effects**: Engaging parallax animations for visual depth
- **Responsive Design**: Mobile-friendly layout built with Tailwind CSS
- **Modern React**: Built with React 19.2.0 and Vite for fast development
- **Fast Development**: Hot Module Replacement (HMR) for instant updates
- **Production Ready**: Optimized build configuration for deployment

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19.2.0](https://react.dev/)
- **Build Tool**: [Vite 7.3.1](https://vite.dev/)
- **Animation Library**: [GSAP 3.14.2](https://greensock.com/gsap/)
- **Styling**: [Tailwind CSS 4.1.18](https://tailwindcss.com/)
- **Responsive Design**: [react-responsive 10.0.1](https://github.com/yocontra/react-responsive)
- **Code Quality**: ESLint for code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm as alternatives)

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/MHN-Sathsara/gsap_cocktails_landing.git
   cd gsap_landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
gsap_landing/
├── src/
│   ├── components/
│   │   ├── About.jsx      # About section with animations
│   │   ├── Cocktails.jsx  # Cocktails showcase
│   │   ├── Hero.jsx       # Hero section
│   │   └── NavBar.jsx     # Navigation bar
│   ├── assets/            # Images, fonts, and other assets
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/
│   ├── fonts/            # Custom fonts
│   ├── images/           # Image assets
│   ├── videos/           # Video assets
│   └── readme/           # README assets
├── constants/
│   └── index.js         # Application constants
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Dependencies and scripts
└── index.html          # HTML entry point
```

## 🎨 Key Components

### NavBar

Navigation component providing site navigation with responsive design.

### Hero

Hero section featuring dramatic scroll animations and parallax effects using GSAP ScrollTrigger.

### Cocktails

Interactive cocktails showcase section with animated transitions and visual effects.

### About

About section with split text animations showcasing product information.

## 🔧 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build          |
| `npm run lint`    | Run ESLint to check code quality  |

## 🎬 Animation Features

This project leverages GSAP's powerful animation capabilities:

- **ScrollTrigger**: Trigger animations based on scroll position
- **SplitText**: Split text content for character/word-level animations
- **Parallax Effects**: Create depth with parallax scrolling

## 📦 Dependencies

### Main Dependencies

- `gsap` - Professional-grade JavaScript animation library
- `@gsap/react` - GSAP React plugin for seamless integration
- `react` - UI library
- `react-dom` - React DOM rendering
- `tailwindcss` - Utility-first CSS framework
- `react-responsive` - Media query component for React

### Dev Dependencies

- `vite` - Next generation frontend tooling
- `@vitejs/plugin-react` - Official Vite plugin for React
- `@tailwindcss/vite` - Tailwind CSS Vite plugin
- `eslint` - Code quality tool

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel**: Optimized for Vite projects
- **Netlify**: Zero-config deployment
- **GitHub Pages**: Static hosting option
- **Traditional Hosting**: Deploy the `dist/` folder

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact & Support

For questions or support, please reach out through:

- GitHub Issues: [Report bugs or request features](https://github.com/MHN-Sathsara/gsap_cocktails_landing/issues)
- Email: Contact information in GitHub profile

## 🏗️ Project Status

**Status**: Active Development  
**Current Branch**: feature/Art-section

---

Made with ❤️ by [MHN-Sathsara](https://github.com/MHN-Sathsara)
