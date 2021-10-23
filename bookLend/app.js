import Books from "./Books.js";

document.addEventListener('DOMContentLoaded', () => {
    let user = prompt('Enter Your Username to login');
    if (user) {
        Books.login(user);
    } else {
        return;
    }

    Books.addBook('Think and Grow Rich','Napolean Hill',1998);
    Books.addBook('In Biafra Africa Died','UNIZIK',2020);
    Books.addBook('Chike and the River', 'Ukpaka S.E', 2008);
    //Books.deleteBook(3)
    console.log(Books.borrowBook(1));
    Books.requestNext(1);
    console.log(Books.getAllBooks());
    //console.log(Books.searchBook(1));
    //console.log(user);
});


