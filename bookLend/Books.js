
export default (function () {

    function Books() {
        this.user = '';
        this.librarian = "John";
        this.id = 0;
        this.shelf = [];
    }
    
    // Login to the application before you continue
    Books.prototype.login = function (name) {
        this.user = name;
        console.log(this.user);
    }
    // Logout of the application 
    Books.prototype.logout = function () {
        return this.user = ''
    }
    // add book to the shelf
    Books.prototype.addBook = function (title, author, year) {
        if (!this.user) {
            let name = prompt("Please enter your name to login");
            if (name) {
                this.login(name);
            }
            return
        } 
            return this.shelf.push({
                id: ++this.id,
                title: title,
                author: author,
                year: year,
                borrower: '',
                borrowTime: '',
                requestNext: '',
                returnTime: '',
                requestNextExpiry: ''
            });
        
    }
    // delete book from the shelf
    Books.prototype.deleteBook = function (id) {
        if (id > this.shelf.length) {
            alert(`Book with an id of ${id} is not found`);
            return
        }
        this.shelf = this.shelf.filter((book) => {
            return book.id != id;
        })
    }
    // borrow a book
    Books.prototype.borrowBook = function (id) {
        if (!this.user) {
            let name = prompt("Please enter your name to login");
            if (name) {
                this.login(name);
            }
            return
        }
        
        let timeInSec = prompt("Please enter borrow time", 30);
        if (timeInSec == null || timeInSec == undefined || timeInSec == '') {
            return;
        }
        for (let book of this.shelf) {
            if (book.id == id) {
                book.borrower = this.user;
                book.borrowTime = new Date().getTime();
                book.returnTime = new Date().getSeconds(new Date().getSeconds() + Number(timeInSec));
                book.returnNext = '';
                book.requestNextExpiry = '';
                return book;
            }
        }
    }
    // search for a particular book by id
    Books.prototype.searchBook = function (id) {
        let book = this.shelf.filter(book => book.id == id);
        return book;

    }
    // return a borrowed book
    Books.prototype.returnBook = function (id) {
        for (let book of this.shelf) {
            if (book.id == id) {
                book.borrowTime = '';
                book.borrower = '';
                book.returnTime = '';
                if (book.requestNext != '') {
                    book.requestNextExpiry = new Date().setSeconds(new Date().getSeconds() + 10);
                }
                break;
            }
        }
    }
    // if a book have been borrowed,your request to be the next borrower
    Books.prototype.requestNext = function (id) {
        for (let book of this.shelf) {
            if (book.id == id) {
                book.returnNext = this.user;
                break;
            }
        }
    }
    // return  every books in the  shelf
    Books.prototype.getAllBooks = function () {
        return this.shelf;
    }

    // return a new instance of the Book
    return new Books()
   
})();