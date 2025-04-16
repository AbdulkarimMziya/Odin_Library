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

// Loop through each book in the library
// myLibrary.forEach(book => console.table(book));

