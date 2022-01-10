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
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
const learningJS = new Book('Learning JavaScript', 'Ethan Brown', 340, 'not read yet');

// console.log(theHobbit.info());

let myLibrary = [];

const addBookToLibrary = (event) => {
  let bookTitle = document.getElementById('book-title').value;
  let bookAuthor = document.getElementById('book-author').value;
  let bookPages = document.getElementById('book-pages').value;
  console.log(bookTitle, bookAuthor, bookPages);
  // return bookTitle, bookAuthor, bookPages;
  event.preventDefault();
  let book = new Book(bookTitle, bookAuthor, bookPages);
  myLibrary.push(book);
  console.log(book);

}


let bookCard = document.getElementById('book-card');
bookCard.innerHTML = myLibrary.map(book => {
  return `<h3 class="book__title js-title">${book.title}</h3 > 
          <p class="book__author js-author">${book.author}</p>
          <p class="book__pages js-pages">Pages: ${book.pages}</p>`
});

// Show modal with forms
document.getElementById('new-book').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('d-none');
});

// Collect user input from forms
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('get-input').addEventListener('click', addBookToLibrary);
});


// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
// });

// https://www.youtube.com/watch?v=NxVCq4p0Kb0