# Weather Application

A modern, responsive weather application built with Next.js and React that provides real-time weather information for any city in the world.

## Features

- 🌍 **Real-time Weather Data** - Get current weather information for any city worldwide
- 🔍 **City Search** - Easy-to-use search bar to find weather for any city
- 📜 **Search History** - Automatic tracking of the last 5 searched cities with quick access
- 📱 **Responsive Design** - Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean and intuitive interface built with Tailwind CSS
- ⚡ **Fast Performance** - Built with Next.js for optimal performance and SEO
- 🔐 **Environment-based Configuration** - Secure API key management

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) 16.1.6
- **UI Library**: [React](https://react.dev/) 19.2.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: JavaScript/JSX with TypeScript configuration
- **Weather API**: [OpenWeatherMap API](https://openweathermap.org/api)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager (comes with Node.js)
- **Git**: Version control system ([Download](https://git-scm.com/))
- **OpenWeatherMap API Key**: Free API key from [OpenWeatherMap](https://openweathermap.org/api)

To check if you have Node.js and npm installed:

```bash
node --version
npm --version
```

## Local Setup Guide

### Step 1: Clone or Navigate to the Project

```bash
https://github.com/Pratham-D14/weather-application.git
```

### Step 2: Install Dependencies

Install all required packages using npm:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### Step 3: Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### Step 4: Set Up Environment Variables

Create a `.env.local` file in the root directory of the project:

```bash
# On Windows
echo. > .env.local
```

Add the following environment variable to `.env.local`:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key_here
```

Replace `your_openweathermap_api_key_here` with your actual OpenWeatherMap API key.

**Note**: The `NEXT_PUBLIC_` prefix makes this variable accessible on the client side, which is necessary for this application.

### Step 5: Verify Setup

Ensure your project structure looks like this:

```
weather-app/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   └── components/
│       ├── Searchbar.jsx
│       ├── SearchHistory.jsx
│       └── WeatherCard.jsx
├── public/
├── .env.local              ← Your environment file
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.jsx            # Root layout component
│   └── page.jsx              # Main page component
└── components/
    ├── Searchbar.jsx         # Search input component
    ├── SearchHistory.jsx     # Search history display component
    └── WeatherCard.jsx       # Weather information display component
```

## Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create optimized production build        |
| `npm start`     | Start production server                  |

## How It Works

1. **Search for a City**: Enter a city name in the search bar
2. **View Weather**: The application fetches real-time weather data and displays it
3. **Search History**: Your searches are automatically saved to browser's local storage
4. **Quick Access**: Click on any city in the search history to quickly view its weather again
5. **Clear History**: Clear all search history with one click

## API Information

This application uses the **OpenWeatherMap Current Weather API**:

- **Endpoint**: `http://api.openweathermap.org/data/2.5/weather`
- **Data Units**: Metric (Celsius)
- **Free Tier**: Limited to 60 calls/minute

For more information, visit [OpenWeatherMap API Documentation](https://openweathermap.org/current)

## Troubleshooting

### Issue: "City not found" error

- **Solution**: Ensure the city name is spelled correctly. Try using a more specific location name (e.g., "London, UK" instead of just "London")

### Issue: API key not working

- **Solution**:
  - Verify your API key is correctly added to `.env.local`
  - Ensure the file is named exactly `.env.local` (not `.env`)
  - Restart the development server after adding the environment variable

### Issue: "Port 3000 already in use"

- **Solution**:
  ```bash
  npm run dev -- -p 3001
  ```
  This will run the app on port 3001 instead

### Issue: Cannot find module errors

- **Solution**:
  ```bash
  npm install
  ```
  Delete `node_modules` folder and `.next` folder, then run install again

## Performance Tips

- The application uses Tailwind CSS for optimized styling
- Next.js automatically code-splits and optimizes routes
- Search history is stored in browser's localStorage for fast access
- API calls are optimized to fetch only necessary data

## Environment Variables Reference

| Variable                      | Type   | Description            | Required |
| ----------------------------- | ------ | ---------------------- | -------- |
| `NEXT_PUBLIC_WEATHER_API_KEY` | String | OpenWeatherMap API key | Yes      |
