const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function displayBook() {
  const table = document.querySelector("table");
  let readButton = document.createElement("button");
  let delButton = document.createElement("button");
  let bookID = 0;
  let row = table.insertRow(-1);
  let title = row.insertCell(0);
  let author = row.insertCell(1);
  let pages = row.insertCell(2);
  let hasRead = row.insertCell(3);
  let delCell = row.insertCell(4);
  myLibrary.forEach((book) => {
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pages.innerHTML = book.pages;
    readButton.innerHTML = book.hasRead;
    hasRead.appendChild(readButton);
    delButton.innerHTML = book.delCell;
    delCell.appendChild(delButton).innerText = "X";
    delButton.dataset.bookid = bookID++;
    removeBook();
  });
}

function addBookToLibrary() {
  const addButton = document.querySelector(".addBook");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const yesRadio = document.getElementById("yes");
  const noRadio = document.getElementById("no");

  addButton.addEventListener("click", () => {
    if (yesRadio.checked) {
      myLibrary.push(
        new Book(title.value, author.value, pages.value, yesRadio.value)
      );
      displayBook();
    } else if (noRadio.checked) {
      myLibrary.push(
        new Book(title.value, author.value, pages.value, noRadio.value)
      );
      displayBook();
    }
  });
}
addBookToLibrary();
