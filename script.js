let myLibrary = [];
addBookToLibrary('test1', 'ex', 3, true);
addBookToLibrary('test2', 'ex', 3, true);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = read;
}
/*Book.prototype.info = function(){
    console.log( `${title} by ${this.author}, ${this.pages} pages, read`);
}*/

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks(myLibrary){
    for(let i = 0; i < myLibrary.length; i++){
        document.write(myLibrary[i].info + "<br >")
    }
}
displayBooks(myLibrary);