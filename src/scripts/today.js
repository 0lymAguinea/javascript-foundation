import { daysTempUnit } from "./tempUnitChange";

export default function todayWeather(data) {
  try {
    const todayTemp = document.querySelector(".todayTemp");
    const todayIcon = document.querySelector("#todayIcon");

    daysTempUnit(data, todayTemp, 0);

    todayIcon.src = data.current.condition.icon;
  } catch (err) {
    console.error(err);
  }
}
