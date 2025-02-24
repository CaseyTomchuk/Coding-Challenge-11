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

let book1 = new Book ("The Nameless Monster", "Franz Bonaparta", 123456, 5)

console.log(book1.getDetails()); // Expected Output: Title: The Nameless Monster, Author: Franz Bonaparta, ISBN: 123456, Number of Copies: 5
book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected Output: Title: The Nameless Monster, Author: Franz Bonaparta, ISBN: 123456, Number of Copies: 4