function tempUnit(data, tomorrowTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    tomorrowTemp.textContent = data.forecast.forecastday[1].day.avgtemp_f;
  } else {
    tomorrowTemp.textContent = data.forecast.forecastday[1].day.avgtemp_c;
  }
}

export default function tomorrowWeather(data) {
  try {
    const tomorrowTemp = document.querySelector(".tomorrowTemp");
    const tomorrowIcon = document.querySelector("#tomorrowIcon");

    tempUnit(data, tomorrowTemp);

    tomorrowIcon.src = data.forecast.forecastday[1].day.condition.icon;
  } catch (err) {
    console.error(err);
  }
}
