function tempUnit(data, todayTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    todayTemp.textContent = data.current.temp_f;
  } else {
    todayTemp.textContent = data.current.temp_c;
  }
}
export default function todayWeather(data) {
  try {
    const todayTemp = document.querySelector(".todayTemp");
    const todayIcon = document.querySelector("#todayIcon");

    tempUnit(data, todayTemp);

    todayIcon.src = data.current.condition.icon;
  } catch (err) {
    console.error(err);
  }
}
