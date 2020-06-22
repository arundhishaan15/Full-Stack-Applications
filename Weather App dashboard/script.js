/**
 * Weather App
 */

// Variable to store the list of city search
let searches = [];

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((res) => {
      showWeatherData(res);
      saveSearchHistory(city);
      displayHistory();
    })
    .catch((error) => {
      console.log(error);
      console.log("Something happened");
    });
};

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
  console.log(weatherData);
  document.getElementById("img-container").src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("temperature").innerText = weatherData.main.temp;
  document.getElementById("humidity").innerText = weatherData.main.humidity;
  document.getElementById("wind-speed").innerText = weatherData.wind.speed;
  // document.getElementById("uv-index").innerText = weatherData.main.temp_max;
  document.getElementById("weather-output").classList.add("visible");
};

/**
 * Save Search History 
 */
saveSearchHistory = (search) => {
  searches.push(search);
}


/**
 * Display History 
 */
displayHistory = () => {
  let index = searches.length - 1; // TODO
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list +=
      "<li class='list-group-item'><h5>" +
      searches[index] +
      "</h5></li>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}
