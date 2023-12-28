import { daysTempUnit } from "./tempUnitChange";

export default function tomorrowWeather(data) {
  try {
    const tomorrowTemp = document.querySelector(".tomorrowTemp");
    const tomorrowIcon = document.querySelector("#tomorrowIcon");

    daysTempUnit(data, tomorrowTemp, 1);

    tomorrowIcon.src = data.forecast.forecastday[1].day.condition.icon;
  } catch (err) {
    console.error(err);
  }
}
