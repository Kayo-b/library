var bookForm = document.getElementById('add');
var myLibrary = []
var value = 0

//Create div function
const createEl = function(element, type, name){
    var newEl = document.createElement(element)
    newEl.setAttribute(type, name)
    return newEl
}


//Append new div element + checkbox + delete button
const show = function(value,library, input){
    var display = document.getElementById('display')
    var newDisplay = createEl('div', 'class', 'newDisplay')
    display.appendChild(newDisplay)
   
    for(x=value;x<library.length;x++){
        console.log(x)
        newDisplay.innerHTML = library[x].printBook()
        newDisplay.appendChild(deleteBut())
        var box = document.getElementById('box')
        var newDiv = document.querySelectorAll('.newDisplay')
        newDiv[x].children[3].appendChild(readCheck(input))
        newDisplay.style.border = "2px solid darkgray"
        newDisplay.style.borderRadius = "5px"
        newDisplay.style.padding = "5px"
        newDisplay.style.margin = "3px"
        newDisplay.style.display = "flex"  
        newDisplay.style.flexDirection = "column"  
    }  
}

//Create delete button element
const deleteBut = function(){
    var button = document.createElement('button')
    button.innerHTML = "DELETE"
    button.setAttribute("id","delBut")
    return button
}

//Create checkbox element
const readCheck = function(input){
    var readIt = document.createElement('input')
    readIt.innerHTML = "Read it"
    readIt.setAttribute('type', "checkbox")
    readIt.setAttribute('id','newCheck')
    if(input == 1){
        readIt.setAttribute('checked', 'checked')
    }
    return readIt
}

//Delete/set style = none function
document.addEventListener('click',function(e){
    if(e.target.id== 'delBut'){
          var elem = e.target
          elem = elem.parentNode
          elem.style.display = "none"
          

          
    }
    
});

//constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.printBook = function() {
        let container = createEl('div', 'id', 'container')
        let bookTitle = createEl('div', 'id', 'title');
        let author = createEl('div', 'id', 'author');
        let nmPages = createEl('div', 'id', 'pages');
        let read = createEl('div', 'id', 'box');
        bookTitle.innerHTML = `Book Title: ${this.title}`
        author.innerHTML = `Author: ${this.author}`
        nmPages.innerHTML = `Pages: ${this.pages}`;
        read.innerHTML = `Read`;
        container.append(bookTitle, author, nmPages,read)
        return container.innerHTML
    
    }
}

const clearField = function(x){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').checked = false

}
//'Add Book' event listener + creates object from Book constructor and pushes it
//to array and runs show() function

bookForm.addEventListener('click', (e) => {
    // e.preventDefault();

    const getTitle = document.getElementById('title').value
    const getAuthor = document.getElementById('author').value
    const getPages = document.getElementById('pages').value
    const getRead = document.getElementById('read')
    if(getRead.checked){  
        getRead.setAttribute('value', 1)
        var checkRead = getRead.value
    }
    else{
        getRead.setAttribute('value', 2)
        var checkRead = getRead.value   
    }
    var addToLibrary = new Book(getTitle, getAuthor, getPages, checkRead);
    var input = Object.values(addToLibrary)[3]
    myLibrary.push(addToLibrary);
    show(value,myLibrary, input)
    value++
    clearField()
})
