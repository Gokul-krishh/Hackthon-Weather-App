const apikey = "fb0541a5a5587d901933d685f7caf1ae"; //Personal API Key
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //API URL
const searchbox = document.querySelector(".search input"); //Search Box
const searchbtn = document.querySelector(".search button"); //Search Button
const weatherIcon = document.querySelector(".weather-icon"); //Weather Icon

async function checkWeather(city) {
  //Function to check weather
  if (city === "") {
    //If search box is empty
    document.querySelector(".weather").style.display = "none"; //Hide Error
    document.querySelector(".error").style.display = "block"; //Display Weather
    return; // Exit the function
  }

  try {
    const weather = await fetch(apiUrl + city + `&appid=${apikey}`); //Fetch API
    if (!weather.ok) {
      alert("City Name Not Match");
      throw new Error(`HTTP error! status: ${weather.status}`);
    }
    const data = await weather.json(); //Convert to JSON

    if (data.cod == "404") {
      document.querySelector(".error").style.display = "block"; //Display Error
      document.querySelector(".weather").style.display = "none"; //Hide Weather
    } else {
      document.querySelector(".city").innerHTML = data.name; //City Name
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C"; //Temperature
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; //Humidity
      document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"; //Wind Speed

      if (data.weather[0].main == "Clouds") {
        //Weather Icon
        weatherIcon.src = "assets/clouds.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rain.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.png";
      } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "assets/snow.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/mist.png";
      }
      document.querySelector(".weather").style.display = "block"; //Display Weather
      document.querySelector(".error").style.display = "none"; //Hide Error
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

searchbtn.addEventListener("click", () => {
  //Search Button Click Event
  checkWeather(searchbox.value); //Check Weather
});
searchbox.addEventListener("keypress", function (e) {
  //Enter Key Press Event
  if (e.key === "Enter") {
    //If Enter Key Pressed
    checkWeather(searchbox.value); //Check Weather
  }
});

// The code snippet above is a simple weather app that fetches weather data from the OpenWeatherMap API. The user can enter the name of a city in the search box, and the app will display the current weather conditions for that city. The app also displays an error message if the city name is not found in the API response.
