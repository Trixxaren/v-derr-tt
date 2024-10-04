const weatherCodeElems = [
  document.getElementById("weathercode"),
  document.getElementById("weathercode1"),
  document.getElementById("weathercode2"),
];
const temperatureElems = {
  current: document.getElementById("temperatur"),
  max: [
    document.getElementById("temperaturMax"),
    document.getElementById("temperaturMax1"),
    document.getElementById("temperaturMax2"),
  ],
  min: [
    document.getElementById("temperaturMin"),
    document.getElementById("temperaturMin1"),
    document.getElementById("temperaturMin2"),
  ],
};

const getWeatherData = () => {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&models=icon_seamless"
  )
    .then((response) => response.json())
    .then((apiData) => {
      const weatherCodes = apiData.daily.weather_code.slice(0, 3);
      const temperatureMax = apiData.daily.temperature_2m_max.slice(0, 3);
      const temperatureMin = apiData.daily.temperature_2m_min.slice(0, 3);

      weatherCodes.forEach((code, i) => {
        weatherCodeElems[i].innerText = weatherCodeMap[code] || "";
        temperatureElems.max[i].innerText = temperatureMax[i];
        temperatureElems.min[i].innerText = temperatureMin[i];
      });
      
      temperatureElems.current.innerText = apiData.current.apparent_temperature;
    });
}

getWeatherData();


// Gör en temp_2m + temp_min / 2 för att få snitt per dag


//För att ta dig vidare till "stad information"
const citySelect = document.getElementById('citySelect')
citySelect.addEventListener('change', (e) => {
  try {
    const selectedCity = JSON.parse(e.target.value);
    console.log(selectedCity.lat) // Latitude
    console.log(selectedCity.lon) // Longitude
    // Vad ni gör med värdena är upp till er
  } catch (e) {
    console.error(e);
    return false;
  }
});


const klocka = new Date();
document.getElementById("klocka").innerHTML = klocka;

// const dateObj = new Date();
// const month = dateObj.getUTCMonth() ;
// const date = dateObj.getUTCDate();
// const year = dateObj.getUTCFullYear();
// const day = dateObj.getUTCDay();
// // document.getElementById("Datum").innerHTML = dateObj;
// console.log(dateObj)

 const weatherCodeMap = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌧️",
  61: "🌦️",
  63: "🌧️",
  71: "❄️",
  80: "☔",
  95: "⛈️"
};