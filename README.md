# NxtWatch

> A modern video streaming platform built with React and TypeScript, featuring authentication, video browsing, and personalized video management.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.4-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Table of Contents

- [NxtWatch](#nxtwatch)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠 Tech Stack](#-tech-stack)
    - [Frontend](#frontend)
    - [Styling](#styling)
    - [Development Tools](#development-tools)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [🔧 Environment Variables](#-environment-variables)
  - [📜 Available Scripts](#-available-scripts)
    - [`npm start`](#npm-start)
    - [`npm run build`](#npm-run-build)
    - [`npm test`](#npm-test)
    - [`npm run lint`](#npm-run-lint)
  - [📖 About](#-about)
    - [User Flow](#user-flow)
    - [Key Features Explained](#key-features-explained)
  - [🌐 Deployment](#-deployment)
    - [Deployment Steps](#deployment-steps)
  - [🤝 Contributing](#-contributing)
    - [Development Guidelines](#development-guidelines)
  - [📝 License](#-license)
  - [👤 Author](#-author)
  - [🙏 Acknowledgments](#-acknowledgments)

## ✨ Features

- 🔐 **Authentication & Authorization** - Secure login with JWT token-based authentication
- 📹 **Video Browsing** - Browse videos by categories (Home, Trending, Gaming)
- 💾 **Saved Videos** - Save your favorite videos for later viewing
- 🎨 **Dark/Light Mode** - Toggle between dark and light themes
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Loading States** - Smooth loading indicators for better UX
- 🚨 **Error Handling** - Comprehensive error views and retry mechanisms
- 🍪 **Cookie Storage** - Persistent user preferences and saved videos
- 🎯 **Video Details** - Detailed video information with player, likes, and save functionality

## 🛠 Tech Stack

### Frontend
- **React** (18.2.0) - UI library
- **TypeScript** (4.9.4) - Type safety
- **React Router DOM** (6.18.0) - Client-side routing
- **Redux Toolkit** (1.9.7) - State management
- **React Player** (2.13.0) - Video playback
- **js-cookie** (3.0.5) - Cookie management

### Styling
- **CSS3** - Custom styling with theme support
- **Responsive CSS** - Mobile-first responsive design

### Development Tools
- **Create React App** - Build tooling
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
nxt-main/
├── public/
│   ├── images/              # Static images and assets
│   └── index.html
├── src/
│   ├── components/
│   │   ├── apis/           # API service functions
│   │   ├── constants/      # Constants and configurations
│   │   ├── Gaming/         # Gaming page component
│   │   ├── HomePage/       # Home page component
│   │   ├── Layout/         # Layout components (Header, SideNav, etc.)
│   │   ├── Login/          # Authentication component
│   │   ├── NotFound/       # 404 error page
│   │   ├── ReduxStore/     # Redux store configuration
│   │   ├── Routes/         # Route definitions
│   │   ├── SavedVideos/    # Saved videos page
│   │   ├── Trending/       # Trending videos page
│   │   ├── Utils/          # Utility components (Loader, etc.)
│   │   └── VideoItem/      # Video-related components
│   ├── App.tsx             # Main App component
│   ├── App.css             # App styles
│   ├── index.tsx           # Application entry point
│   ├── index.css           # Global styles
│   ├── theme.css           # Theme variables
│   ├── light-theme.css     # Light theme styles
│   └── responsive.css      # Responsive styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tahirbasha/nxt-main.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd nxt-main
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration if needed.

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env` file in the root directory (optional):

```env
REACT_APP_API_BASE_URL=https://apis.ccbp.in
REACT_APP_LOGIN_API=https://apis.ccbp.in/login
```

> **Note**: Currently, API URLs are hardcoded. Consider moving them to environment variables for better configuration management.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

### `npm run lint`
Runs the linter to check code quality

## 📖 About

NxtWatch is a video streaming platform that provides users with a seamless video browsing experience.

### User Flow

1. **Login Page**: The app starts at the login page with prepopulated credentials for easy access
2. **Homepage**: After authentication, users are navigated to the homepage displaying a list of videos
3. **Categories**: Users can browse different genres:
   - **Home**: All videos with search functionality
   - **Trending**: Popular trending videos
   - **Gaming**: Gaming-related content
   - **Saved**: User's saved videos collection
4. **Video Details**: Clicking on any video navigates to a detailed page where users can:
   - Watch the video
   - Like/Dislike the video
   - Save the video to their collection
   - View channel information and video description
5. **Logout**: Users can logout by clicking the logout button in the header

### Key Features Explained

- **Authentication**: JWT token-based authentication with secure cookie storage
- **Theme Toggle**: Switch between dark and light modes with persistent preference storage
- **Responsive Navigation**: Sidebar navigation on desktop, bottom navigation on mobile
- **Error Handling**: Graceful error handling with retry mechanisms
- **Loading States**: Smooth loading indicators during data fetching

## 🌐 Deployment

The application is deployed on **Vercel**:

🔗 **Live Demo**: [https://nxtflix-tb.vercel.app/](https://nxtflix-tb.vercel.app/)

### Deployment Steps

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy to Vercel:
   ```bash
   npm run deploy
   ```
   Or connect your GitHub repository to Vercel for automatic deployments.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain code consistency with existing style
- Add comments for complex logic
- Write tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Tahir Basha**

- GitHub: [@Tahirbasha](https://github.com/Tahirbasha)
- Project Link: [https://github.com/Tahirbasha/nxt-main](https://github.com/Tahirbasha/nxt-main)

## 🙏 Acknowledgments

- API provided by [CCBP](https://apis.ccbp.in)
- Icons and assets used in the project
- React and TypeScript communities

---

⭐ If you found this project helpful, please give it a star!

