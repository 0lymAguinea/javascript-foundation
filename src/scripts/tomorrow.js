export default function tomorrowWeather(data) {
  const tomorrowTemp = document.querySelector(".tomorrowTemp");
  const tomorrowIcon = document.querySelector("#tomorrowIcon");

  console.log(data.forecast.forecastday[1].day.avgtemp_c);

  tomorrowTemp.textContent = data.forecast.forecastday[1].day.avgtemp_c;
  tomorrowIcon.src = data.forecast.forecastday[1].day.condition.icon;
}
