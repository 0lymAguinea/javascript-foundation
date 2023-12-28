import { todayTempUnit } from "./tempUnitChange";

export default function todayWeather(data) {
  try {
    const todayTemp = document.querySelector(".todayTemp");
    const todayIcon = document.querySelector("#todayIcon");

    todayTempUnit(data, todayTemp);

    todayIcon.src = data.current.condition.icon;
  } catch (err) {
    console.error(err);
  }
}
