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
        newDisplay.style.border = "1px solid gray"
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
    if(input == 1){
        readIt.setAttribute('checked', 'checked')
    }
    return readIt
}

//Delete button del function
document.addEventListener('click',function(e){
    if(e.target.id== 'delBut'){
          var elem = e.target
          elem = elem.parentNode
          console.log(elem)
          elem.remove(elem)
          console.log(value)
          

          
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
        // container.setAttribute('id', 'container');
        // container.style.display = "flex";
        // container.style.flexDirection = "row";
        let bookTitle = createEl('div', 'id', 'title');
        bookTitle.innerHTML = `Book Title: ${this.title}`
        let author = createEl('div', 'id', 'author');
        author.innerHTML = `Author: ${this.title}`
        let nmPages = createEl('div', 'id', 'pages');
        nmPages.innerHTML = `Pages: ${this.title}`;
        let read = createEl('div', 'id', 'box');
        // read.setAttribute('id', 'box')
        read.innerHTML = `Read`;
        container.append(bookTitle, author, nmPages,read)
        return container.innerHTML
        // return createEl('p').innerHTML = 
        // `Book Title: ${this.title} <br>
        // Author: ${this.author} <br>
        // <b>Number of Pages:</b> ${this.pages} <br>
        // Read `
    }
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
})

