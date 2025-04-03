# Weather App

## Description

This is a simple Weather App that allows users to search for a city and get the current weather conditions, including temperature, humidity, and wind speed. The app fetches weather data from the OpenWeatherMap API and displays relevant information in a user-friendly interface.

## Live Demo
[https://skyfinder.netlify.app]

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Features

- Search for weather conditions by city name
- Display temperature, humidity, and wind speed
- Dynamic weather icons based on conditions (Cloudy, Rainy, Clear, etc.)
- Error message for invalid city names

## File Structure

- `index.html` - The main structure of the web page
- `style.css` - Stylesheet for UI design
- `script.js` - JavaScript functionality to fetch and display weather data

## Setup Instructions

1. Clone the repository or download the source code.
2. Open `index.html` in your browser.
3. Ensure you have an active internet connection to fetch API data.
4. Enter a city name in the search bar and press the search button to retrieve weather data.

## API Key

The application uses an API key from OpenWeatherMap. If you need to replace it with your own:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/).
2. Get an API key.
3. Replace the `apikey` variable in `script.js` with your new API key:
   ```javascript
   const apikey = "YOUR_NEW_API_KEY_HERE";
   ```

## Future Improvements

- Add a forecast for multiple days.
- Improve error handling and UI feedback.
- Implement geolocation for automatic weather detection.

## License

This project is open-source and free to use.
