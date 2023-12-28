function currentUnitChange(data, weatherTemp, select) {
  select.addEventListener("change", () => {
    if (select.value === "Fahrenheit") {
      weatherTemp.textContent = data.current.temp_f;
    } else {
      weatherTemp.textContent = data.current.temp_c;
    }
  });
}
function todayUnitChange(data, todayTemp, select) {
  select.addEventListener("change", () => {
    if (select.value === "Fahrenheit") {
      todayTemp.textContent = data.forecast.forecastday[0].day.avgtemp_f;
    } else {
      todayTemp.textContent = data.forecast.forecastday[0].day.avgtemp_c;
    }
  });
}
function tomorrowUnitChange(data, tomorrowTemp, select) {
  select.addEventListener("change", () => {
    if (select.value === "Fahrenheit") {
      tomorrowTemp.textContent = data.forecast.forecastday[1].day.avgtemp_f;
    } else {
      tomorrowTemp.textContent = data.forecast.forecastday[1].day.avgtemp_c;
    }
  });
}
function overmorrowUnitChange(data, overmorrowTemp, select) {
  select.addEventListener("change", () => {
    if (select.value === "Fahrenheit") {
      overmorrowTemp.textContent = data.forecast.forecastday[2].day.avgtemp_f;
    } else {
      overmorrowTemp.textContent = data.forecast.forecastday[2].day.avgtemp_c;
    }
  });
}

export function tempUnit(data, weatherTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    weatherTemp.textContent = data.current.temp_f;
  } else {
    weatherTemp.textContent = data.current.temp_c;
  }

  currentUnitChange(data, weatherTemp, select);
}
export function todayTempUnit(data, todayTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    todayTemp.textContent = data.forecast.forecastday[0].day.avgtemp_f;
  } else {
    todayTemp.textContent = data.forecast.forecastday[0].day.avgtemp_c;
  }

  todayUnitChange(data, todayTemp, select);
}

export function tomorrowTempUnit(data, tomorrowTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    tomorrowTemp.textContent = data.forecast.forecastday[1].day.avgtemp_f;
  } else {
    tomorrowTemp.textContent = data.forecast.forecastday[1].day.avgtemp_c;
  }

  tomorrowUnitChange(data, tomorrowTemp, select);
}
export function overmorrowTempUnit(data, overmorrowTemp) {
  const select = document.getElementById("tempUnitSelect");
  if (select.value === "Fahrenheit") {
    overmorrowTemp.textContent = data.forecast.forecastday[2].day.avgtemp_f;
  } else {
    overmorrowTemp.textContent = data.forecast.forecastday[2].day.avgtemp_c;
  }
  overmorrowUnitChange(data, overmorrowTemp, select);
}
