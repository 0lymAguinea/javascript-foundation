const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function hasReadStatus(book, hasReadButton) {
  if (hasReadButton.textContent === "Read") {
    hasReadButton.textContent = "Not Yet";
    book.hasRead = "Not Yet";
  } else if (hasReadButton.textContent === "Not Yet") {
    hasReadButton.textContent = "Read";
    book.hasRead = "Read";
  }
}

function deleteBook(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  displayBook();
}

function displayBook() {
  const table = document.querySelector("tbody");
  table.innerHTML = "";
  myLibrary.forEach((book, bookIndex) => {
    const row = table.insertRow(-1);
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const hasReadCell = row.insertCell(3);
    const delCell = row.insertCell(4);

    const hasReadButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    titleCell.innerHTML = book.title;
    authorCell.innerHTML = book.author;
    pagesCell.innerHTML = book.pages;
    hasReadButton.innerHTML = book.hasRead;
    hasReadCell.appendChild(hasReadButton);

    hasReadButton.addEventListener("click", () => {
      hasReadStatus(book, hasReadButton);
    });

    delCell.appendChild(deleteButton);
    deleteButton.textContent = "X";
    deleteButton.dataset.bookid = bookIndex;
    deleteButton.addEventListener("click", () => {
      deleteBook(bookIndex);
    });
  });
}

function addBookToLibrary() {
  const addButton = document.querySelector(".addBook");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const yesRadio = document.getElementById("yes");

  addButton.addEventListener("click", () => {
    const hasReadBook = yesRadio.checked ? "Read" : "Not Yet";
    myLibrary.push(
      new Book(title.value, author.value, pages.value, hasReadBook)
    );
    displayBook();
  });
}
addBookToLibrary();
