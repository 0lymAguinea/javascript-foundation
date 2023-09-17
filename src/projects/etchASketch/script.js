const container = document.createElement("div");
container.className = "container";

const btn = document.createElement("button");
btn.textContent = "BUTTON";
btn.className = "btn";
document.body.appendChild(btn);
document.body.appendChild(container);

const randNum = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    container.appendChild(cell);
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = randNum();
    });
  }
}

function newGrid() {
  btn.addEventListener("click", () => {
    let num1 = prompt("Enter rows");
    let num2 = prompt("Enter cols");
    let rows = parseInt(num1);
    let cols = parseInt(num2);
    if (rows >= 100 || cols >= 100) {
      alert("Greater than 100 not allowed. TRY AGAIN");
    } else if (rows <= 100 && cols <= 100) {
      createGrid(rows, cols);
    }
  });
}
newGrid();
createGrid(16, 16);
