function tempUnit(data, overmorrowTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    overmorrowTemp.textContent = data.forecast.forecastday[2].day.avgtemp_f;
  } else {
    overmorrowTemp.textContent = data.forecast.forecastday[2].day.avgtemp_c;
  }
}

export default function overmorrowWeather(data) {
  try {
    const overmorrowTemp = document.querySelector(".overmorrowTemp");
    const overmorrowIcon = document.querySelector("#overmorrowIcon");

    tempUnit(data, overmorrowTemp);

    overmorrowIcon.src = data.forecast.forecastday[2].day.condition.icon;
  } catch (err) {
    console.error(err);
  }
}
