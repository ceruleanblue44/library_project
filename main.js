class Book {
  constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read     
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
  
  // Not sure this is OK
  getIndex() {
    return myLibrary.indexOf(this); 
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
const learningJS = new Book('Learning JavaScript', 'Ethan Brown', 340, 'not read yet');

// console.log(theHobbit.info());

let myLibrary = [theHobbit, learningJS];

const displayBooks = () => {
  let bookCard = document.getElementById('library');
  bookCard.innerHTML = myLibrary.map(book => {
    // console.log(myLibrary.indexOf(book));
    return `<div class="book-card">
          <h3 class="book__title">${book.title}</h3 > 
          <p class="book__author">${book.author}</p>
          <p class="book__pages">Pages: ${book.pages}</p>
          <button id="delete" type="button">Remove</button>
          </div>`
          
  }).join('');
}

const addBookToLibrary = (event) => {
  event.preventDefault();

  // Get form data
  let bookTitle = document.getElementById('book-title').value;
  let bookAuthor = document.getElementById('book-author').value;
  let bookPages = document.getElementById('book-pages').value;
  console.log(bookTitle, bookAuthor, bookPages);
  
  // Create new book
  let book = new Book(bookTitle, bookAuthor, bookPages);

  // Push new book to the library
  myLibrary.push(book);
  console.log(book, myLibrary, `index is ${myLibrary.indexOf(book)}`);

  // Clear forms
  document.querySelector('form').reset();

  // Display the library
  displayBooks();
}

const deleteBook = () => {
  console.log(myLibrary.indexOf(this));
}

// Display existing books when page first loads, collect user input from forms
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  displayBooks();
  document.getElementById('get-input').addEventListener('click', addBookToLibrary);
  // Delete book from library
  document.getElementById('delete').addEventListener('click', () => {
    deleteBook();
  });
});

// Show modal with forms
document.getElementById('new-book').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('d-none');
});




// https://www.youtube.com/watch?v=NxVCq4p0Kb0