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
// For today, tomorrow, and overmorrow avg temp
export function daysTempUnit(data, daysTemp, daysIndex) {
  const select = document.getElementById("tempUnitSelect");
  const unit = select.value === "Fahrenheit" ? "f" : "c";
  daysTemp.textContent =
    data.forecast.forecastday[daysIndex].day[`avgtemp_${unit}`];
  unitChange(data, daysTemp, daysIndex, select);
}
