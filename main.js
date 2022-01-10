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

console.log(theHobbit.info());

let myLibrary = [theHobbit];

function addBookToLibrary() {

}


let bookCard = document.getElementById('book-card');
bookCard.innerHTML = myLibrary.map(book => {
  return `<h3 class="book__title js-title">${book.title}</h3 > 
          <p class="book__author js-author">${book.author}</p>
          <p class="book__pages js-pages">Pages: ${book.pages}</p>
          <button type="submit">Remove</button>`
})
