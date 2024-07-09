const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let isRead = read ? "already read" : "not read yet";
    return `${title} by ${author}, ${pages} pages, ${isRead}`;
  };
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  if (title && author && pages) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
    clearInputFields();
  } else {
    alert('Please fill out all fields');
  }
}

function displayBooks() {
  const libraryDisplay = document.getElementById('library-display');
  libraryDisplay.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.id = `book-card-${index}`;

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <label>
        <input type="checkbox" id="read-checkbox-${index}" ${book.read ? 'checked' : ''} onclick="toggleReadStatus(${index})"> Read
      </label>
      <button onclick="removeBook(${index})">Remove Book</button>
    `;

    libraryDisplay.appendChild(bookCard);
  });
}

function clearInputFields() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

// Adding some sample books for initial display
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 310, true));
myLibrary.push(new Book('1984', 'George Orwell', 328, false));
displayBooks();
