// Current time
function currentUnitChange(data, weatherTemp, select) {
  select.addEventListener("change", () => {
    const unit = select.value === "Fahrenheit" ? "f" : "c";
    weatherTemp.textContent = data.current[`temp_${unit}`];
  });
}
// Get the avg temp
function unitChange(data, tempElement, dayIndex, select) {
  select.addEventListener("change", () => {
    const unit = select.value === "Fahrenheit" ? "f" : "c";
    tempElement.textContent =
      data.forecast.forecastday[dayIndex].day[`avgtemp_${unit}`];
  });
}
// Current time
export function currentTemp(data, weatherTemp) {
  const select = document.getElementById("tempUnitSelect");
  const unit = select.value === "Fahrenheit" ? "f" : "c";
  weatherTemp.textContent = data.current[`temp_${unit}`];

  currentUnitChange(data, weatherTemp, select);
}

export function todayTempUnit(data, todayTemp) {
  const select = document.getElementById("tempUnitSelect");
  const unit = select.value === "Fahrenheit" ? "f" : "c";
  todayTemp.textContent = data.forecast.forecastday[0].day[`avgtemp_${unit}`];

  unitChange(data, todayTemp, 0, select);
}

export function tomorrowTempUnit(data, tomorrowTemp) {
  const select = document.getElementById("tempUnitSelect");
  const unit = select.value === "Fahrenheit" ? "f" : "c";
  tomorrowTemp.textContent =
    data.forecast.forecastday[1].day[`avgtemp_${unit}`];
  unitChange(data, tomorrowTemp, 1, select);
}

export function overmorrowTempUnit(data, overmorrowTemp) {
  const select = document.getElementById("tempUnitSelect");
  const unit = select.value === "Fahrenheit" ? "f" : "c";
  overmorrowTemp.textContent =
    data.forecast.forecastday[2].day[`avgtemp_${unit}`];
  unitChange(data, overmorrowTemp, 2, select);
}
