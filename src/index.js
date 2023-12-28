function displayCurrentLocation(location) {
  const currentLocation = document.getElementById("currentLocation");
  currentLocation.textContent = location;
}
async function displayCurrentBottomInfo(data) {
  try {
    const weatherTemp = document.querySelector(".weatherTemp");
    const tempName = document.querySelector(".tempName");
    const tempIcon = document.querySelector("#tempIcon");

    weatherTemp.textContent = data.current.temp_c;
    tempName.textContent = data.current.condition.text;
    tempIcon.src = data.current.condition.icon;
  } catch (err) {
    console.log(err);
  }
}

async function getWeatherLocation(location) {
  try {
    const weatherLocation = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=3ff41353711f423d9b252916232812&q=${location}&aqi=no`,
      { mode: "cors" }
    );
    const weatherData = await weatherLocation.json();
    displayCurrentBottomInfo(weatherData);
  } catch (err) {
    console.error(err);
  }
}
function getSearchData() {
  const searchInput = document.querySelector("#searchLocation");
  const searchLocationBtn = document.getElementById("searchLocationBtn");

  searchLocationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    displayCurrentLocation(searchInput.value);
    getWeatherLocation(searchInput.value);
  });
}

getSearchData();
