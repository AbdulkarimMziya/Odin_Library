const myLibrary = [];

class Book {
    constructor(title, author, pages, hasRead) {
        this._id = crypto.randomUUID(); // private assignment
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._hasRead = hasRead;
    }


    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    toggleReadStatus() {
        this._hasRead = !this._hasRead;
    }

    get hasRead() {
        return this._hasRead;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function render(book) {
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

    // Add read checkbox
    const readLabel = document.createElement('label');
    readLabel.textContent = 'Read: ';
    const readCheckbox = document.createElement('input');
    readCheckbox.type = 'checkbox';
    readCheckbox.checked = book.hasRead;
 
    readCheckbox.addEventListener('change', () => {
        book.toggleReadStatus();
        console.log(`"${book.title}" read status: ${book.hasRead}`);
    });
 
    p.appendChild(document.createElement('br'));
    p.appendChild(readLabel);
    p.appendChild(readCheckbox);

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
}

// Loop through each book in the library
function renderAll() {
    myLibrary.forEach(render);
}

// Initial books
const book1 = new Book("1984", "George Orwell", 328, true);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const book4 = new Book("Moby Dick", "Herman Melville", 635, false);
const book5 = new Book("Pride and Prejudice", "Jane Austen", 279, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

const container = document.querySelector('.grid-container');
renderAll();


const openBtn = document.querySelector('.btnDisplayForm');
const closeBtn = document.querySelector('.close-dialog-btn');
const dialog = document.querySelector('.dialog');
const form = dialog.querySelector('form');

// Show dialog on button click
openBtn.addEventListener('click', () => {
    dialog.show();
});

// Close dialog after submitting the form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    dialog.close();
});

// Hide dialog
closeBtn.addEventListener('click', () => dialog.close());

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const pages = parseInt(document.querySelector('#pages').value);
    const hasRead = document.querySelector('input[name="hasRead"]:checked').value === "true";

    const newBook = new Book(title, author, pages, hasRead);
    addBookToLibrary(newBook);
    render(newBook);

    dialog.close();
    form.reset();
});