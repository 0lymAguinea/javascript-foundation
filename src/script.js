const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}
function addBookToLibrary() {
  const addButton = document.querySelector(".addBook");
  const bookTitle = document.querySelector("#title");
  const bookAuthor = document.querySelector("#author");
  const bookPages = document.querySelector("#pages");
  const bookHasReadYes = document.querySelector("#yes");
  const bookHasReadNo = document.querySelector("#no");

  const table = document.querySelector("table");
  // let tdTitle = document.querySelector(".tdTitle");
  // let tdAuthor = document.querySelector(".tdAuthor");
  // let tdPages = document.querySelector(".tdPages");

  addButton.addEventListener("click", () => {
    myLibrary.push(
      `${bookTitle.value}, ${bookAuthor.value}, ${bookPages.value}`
    );
    let row = table.insertRow(-1);
    let title = row.insertCell(0);
    let author = row.insertCell(1);
    let pages = row.insertCell(2);
    title.innerHTML = bookTitle.value;
    author.innerHTML = bookAuthor.value;
    pages.innerHTML = bookPages.value;
  });
}
addBookToLibrary();
