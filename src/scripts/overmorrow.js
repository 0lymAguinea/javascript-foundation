export default function overmorrowWeather(data) {
  const overmorrowTemp = document.querySelector(".overmorrowTemp");
  const overmorrowIcon = document.querySelector("#overmorrowIcon");

  console.log(data.forecast.forecastday[2].day.avgtemp_c);

  overmorrowTemp.textContent = data.forecast.forecastday[2].day.avgtemp_c;
  overmorrowIcon.src = data.forecast.forecastday[2].day.condition.icon;
}
