export default function todayWeather(data) {
  const todayTemp = document.querySelector(".todayTemp");
  const todayIcon = document.querySelector("#todayIcon");
  todayTemp.textContent = data.current.temp_c;
  todayIcon.src = data.current.condition.icon;
}
