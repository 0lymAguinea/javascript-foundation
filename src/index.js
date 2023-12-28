import todayWeather from "./scripts/today";
import tomorrowWeather from "./scripts/tomorrow";
import overmorrowWeather from "./scripts/overmorrow";

function displayCurrentLocation(location) {
  const currentLocation = document.getElementById("currentLocation");
  currentLocation.textContent = location;
}
function tempUnit(data, weatherTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    weatherTemp.textContent = data.current.temp_f;
  } else {
    weatherTemp.textContent = data.current.temp_c;
  }
}

async function currentWeather(data) {
  try {
    const weatherTemp = document.querySelector(".weatherTemp");
    const tempName = document.querySelector(".tempName");
    const tempIcon = document.querySelector("#tempIcon");

    tempUnit(data, weatherTemp);

    tempName.textContent = data.current.condition.text;
    tempIcon.src = data.current.condition.icon;
  } catch (err) {
    console.log(err);
  }
}

async function getWeatherLocation(location) {
  try {
    const weatherLocation = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=3ff41353711f423d9b252916232812&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const weatherData = await weatherLocation.json();
    Promise.all([
      currentWeather(weatherData),
      todayWeather(weatherData),
      tomorrowWeather(weatherData),
      overmorrowWeather(weatherData),
    ]);
  } catch (err) {
    console.error(err);
  }
}

function getSearchData() {
  const searchInput = document.querySelector("#searchLocation");
  const searchLocationBtn = document.getElementById("searchLocationBtn");

  searchLocationBtn.addEventListener("click", (e) => {
    if (searchInput.value !== "") {
      e.preventDefault();
      displayCurrentLocation(searchInput.value);
      getWeatherLocation(searchInput.value);
    } else {
      console.log("empty");
    }
  });
}

function getDates() {
  const todayDate = document.getElementById("todayDate");
  const tomorrowDate = document.getElementById("tomorrowDate");
  const overmorrowDate = document.getElementById("overmorrowDate");

  const today = new Date();
  const tomorrow = new Date(today);
  const overmorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);
  overmorrow.setDate(today.getDate() + 2);

  todayDate.textContent = today.toDateString();
  tomorrowDate.textContent = tomorrow.toDateString();
  overmorrowDate.textContent = overmorrow.toDateString();
}
getSearchData();
getDates();
