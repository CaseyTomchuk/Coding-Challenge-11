// Task 1: Creating a book class

class Book {
    constructor(title,author,isbn,copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Number of Copies: ${this.copies}`
    }

    updateCopies(quantity) { //takes in quantity as a parameter
        this.copies += quantity; // updating the number of copies by the quantity that we input

        if (this.copies < 0) { // if we input a quantity that would make us have less than 0 copies, we instead just set the copies to 0
            this.copies = 0
        }
         return this.copies; 
    }
};

const book1 = new Book ("The Nameless Monster", "Franz Bonaparta", 123456, 5)
const book2 = new Book ("Book 2 Test", "Author Test", 500, 6);

console.log(book1.getDetails()); // Expected Output: Title: The Nameless Monster, Author: Franz Bonaparta, ISBN: 123456, Number of Copies: 5
book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected Output: Title: The Nameless Monster, Author: Franz Bonaparta, ISBN: 123456, Number of Copies: 4

// Task 2: Creating a borrower Class

class Borrower {
    constructor(name, borrowerID, borrowedBooks) {
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = []; // borrowedBooks is an array of books
    };

    borrowBook(book) {
        this.borrowedBooks.push(book); // pushes the input title to the borrowedBooks array
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book); // index is equal to the location of the book in the array
        if (index <= -1) {
            return;
        }
        this.borrowedBooks.splice(index, 1); // we are removing the item at that specific index in that array
    }
}
const borrower1 = new Borrower("Johan Liebert", 201);
borrower1.borrowBook(book1); // Expected Output: ['The Nameless Monster'] 
console.log(borrower1.borrowedBooks[0].title);
borrower1.returnBook(book1); 
console.log(borrower1.borrowedBooks); // Expected Output: []

// Task 3: Creating a Library Class

class Library {
    constructor(books = [], borrowers = []) { // Decided to write the [] here instead since we dont want a new array called every time, and instead we want to refrence an existing information
        this.books = books;
        this.borrowers = borrowers;
    };

    addBook(book) {
        this.books.push(book); // we add a book object to the books array which matches the book parameter entered 
    };

    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }

    listBooks() {
        return this.books.map(book => book.getDetails()); // for the books array, we are mapping each individual book element to the getDetails() function, giving us the getDetails() output for each book
    };

    lendBook(borrowerID, isbn) {

     const book = this.books.find(book => book.isbn === isbn); // takeks the isbn parameter and checks each book in the array until it finds an isbn that matches the parameter
     const borrower = this.borrowers.find(borrower => borrower.borrowerID === borrowerID);
     
     if (typeof book === 'undefined') { // checks to see if the book actually exists based (it would not exist if the isbn doesnt exist)
        console.log(`No book found with this ISBN: ${isbn}`);
        return; // This is necessary!!!!! if the function continues to run there will be errors!!!
    };

    if (typeof borrower === 'undefined') {
        console.log(`Invalid Borrower`);
        return;
    }; 

        if (book.copies > 0) { // if we have any copies left, we'll remove a copy
            book.updateCopies(-1);
            borrower.borrowBook(book);
        }
        else {
            console.log(`No copies remaining, come back in 2 weeks`); // I don't love the way that this executes, but the idea is there
        };
    };
};

const library1 = new Library;
library1.addBook(book1); // Adding a book that we have already defined
library1.addBorrower(borrower1);
console.log(`Library || ${library1.listBooks()}`); // Expected Output: Library || Title: The Nameless Monster, Author: Franz Bonaparta, ISBN: 123456, Number of Copies: 4

// Task 4: Implementing Book Borrowing

library1.lendBook(201, 123456); 
library1.lendBook(201, 12345); // Expected Output: No book found with this ISBN: 12345 (NOT AN EXISTING ISBN EXAMPLE)

console.log(book1.getDetails()); // Expected Output: Title: The Nameless Monster, Author: Franz Bonaparta, ISBN: 123456, Number of Copies: 3
console.log(borrower1.borrowedBooks[0].title);