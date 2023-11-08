const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function displayBook() {
  const table = document.querySelector("table");

  let row = table.insertRow(-1);
  let title = row.insertCell(0);
  let author = row.insertCell(1);
  let pages = row.insertCell(2);

  myLibrary.forEach((book) => {
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pages.innerHTML = book.pages;
  });
}

function addBookToLibrary() {
  const addButton = document.querySelector(".addBook");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  addButton.addEventListener("click", () => {
    myLibrary.push(new Book(title.value, author.value, pages.value));
    displayBook();
  });
}
addBookToLibrary();
