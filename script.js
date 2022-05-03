// var myLibrary = [];
var bookForm = document.getElementById('add');
var arr = ''

const createEl = function(element){
    var newDiv = document.createElement(element)
    return newDiv
}


const show = function(library){
    for(x=0;x<=library.length;x++){
        newDisplay = display.appendChild(createEl('div'))
        newDisplay.innerHTML = library[x].printBook()
        newDisplay.style.border = "1px solid gray"
        newDisplay.style.borderRadius = "5px"
        newDisplay.style.padding = "5px"
        newDisplay.style.margin = "3px"
        newDisplay.style.display = "flexbox"
        newDisplay.style.flexDirection = "column"

    }
    
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.printBook = function() {
        return createEl('p').innerHTML = 
        `Book Title: ${this.title} <br>
        Author: ${this.author} <br>
        <b>Number of Pages:</b> ${this.pages} <br>
        Read: ${this.read}`
    }
}


bookForm.addEventListener('click', (e) => {
    const getTitle = document.getElementById('title').value
    const getAuthor = document.getElementById('author').value
    const getPages = document.getElementById('pages').value
    const getRead = document.querySelectorAll("label[name='read']:checked").value

    let addToLibrary = new Book(getTitle, getAuthor, getPages, getRead);
    let myLibrary = []
    myLibrary.push(addToLibrary);
    show(myLibrary)

    
})
