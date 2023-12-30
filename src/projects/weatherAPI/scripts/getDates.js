export default function getDates() {
  const todayDate = document.getElementById("todayDate");
  const tomorrowDate = document.getElementById("tomorrowDate");
  const overmorrowDate = document.getElementById("overmorrowDate");

  const today = new Date();
  const tomorrow = new Date(today);
  const overmorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);
  overmorrow.setDate(today.getDate() + 2);

  todayDate.textContent = today.toDateString();
  tomorrowDate.textContent = tomorrow.toDateString();
  overmorrowDate.textContent = overmorrow.toDateString();
}
