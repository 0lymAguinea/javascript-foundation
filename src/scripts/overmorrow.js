import { daysTempUnit } from "./tempUnitChange";

export default function overmorrowWeather(data) {
  try {
    const overmorrowTemp = document.querySelector(".overmorrowTemp");
    const overmorrowIcon = document.querySelector("#overmorrowIcon");

    daysTempUnit(data, overmorrowTemp, 2);

    overmorrowIcon.src = data.forecast.forecastday[2].day.condition.icon;
  } catch (err) {
    console.error(err);
  }
}
