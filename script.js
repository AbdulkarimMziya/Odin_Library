const myLibrary = [];

function Book(id,title, author, pages, hasRead) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Create and add 5 books
const book1 = new Book(crypto.randomUUID(), "1984", "George Orwell", 328, true);
const book2 = new Book(crypto.randomUUID(), "To Kill a Mockingbird", "Harper Lee", 281, false);
const book3 = new Book(crypto.randomUUID(), "The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const book4 = new Book(crypto.randomUUID(), "Moby Dick", "Herman Melville", 635, false);
const book5 = new Book(crypto.randomUUID(), "Pride and Prejudice", "Jane Austen", 279, true);

// Add books to the library
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

const container = document.querySelector('.grid-container');

// Loop through each book in the library
myLibrary.forEach(book => {
    // Create .item div
    const item = document.createElement('div');
    item.classList.add('item');

    // Create book icon img
    const bookImg = document.createElement('img');
    bookImg.src = './images/book-open-svgrepo-com.svg';
    bookImg.alt = 'book_icon';

    // Create paragraph element
    const p = document.createElement('p');

    // Create spans and set text
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('title');
    titleSpan.textContent = book.title;

    const authorSpan = document.createElement('span');
    authorSpan.classList.add('author');
    authorSpan.textContent = book.author;

    const pagesSpan = document.createElement('span');
    pagesSpan.classList.add('pages');
    pagesSpan.textContent = book.pages;

    // Add text and spans to <p>
    p.innerHTML = `Title: `;
    p.appendChild(titleSpan);
    p.innerHTML += `<br>Author: `;
    p.appendChild(authorSpan);
    p.innerHTML += `<br>Pages: `;
    p.appendChild(pagesSpan);

    // Create delete button (cross icon)
    const deleteBtn = document.createElement('img');
    deleteBtn.src = './images/cross-svgrepo-com.svg';
    deleteBtn.alt = 'delete_book_icon';
    deleteBtn.classList.add('delete-btn');

    // Add delete functionality
    deleteBtn.addEventListener('click', () => {
        item.remove();
        const index = myLibrary.findIndex(b => b.id === book.id);
        if (index !== -1) myLibrary.splice(index, 1);
        console.log(`Book with ID ${book.id} removed`);
    });

    // Append elements to .item
    item.appendChild(bookImg);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // Append item to container
    container.appendChild(item); 
});

