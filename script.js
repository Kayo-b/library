var bookForm = document.getElementById('add');


const createEl = function(element){
    var newEl = document.createElement(element)
    newEl.classList.add('newDiv')
   
    return newEl
}

const deleteEl = function(element){
    element.addEventListener()
    element.remove('div')
}

const show = function(library){
    let newDisplay = display.appendChild(createEl('div'))

    for(x=0;x<=library.length;x++){
        // var button = document.createElement('button')
        // button.innerHTML = "DELETE"
        // newDisplay.appendChild(button)
        deleteBut()
        newDisplay.innerHTML = library[x].printBook()
        newDisplay.style.border = "1px solid gray"
        newDisplay.style.borderRadius = "5px"
        newDisplay.style.padding = "5px"
        newDisplay.style.margin = "3px"
        
        
        

    }
    
}

const deleteBut = function(){
    var button = document.createElement('button')
    button.innerHTML = "DELETE"
    newDisplay.appendChild(button)
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
    e.preventDefault();
    const getTitle = document.getElementById('title').value
    const getAuthor = document.getElementById('author').value
    const getPages = document.getElementById('pages').value
    const getRead = document.querySelectorAll('#read')
    for(x = 0; x < getRead.length; x++){
        
        if(getRead[x].checked){
            var checkRead = getRead[x].value
            // console.log(getRead[x].value)
        }
        
        
    }
    
    let addToLibrary = new Book(getTitle, getAuthor, getPages, checkRead);
    let myLibrary = []
    myLibrary.push(addToLibrary);
    show(myLibrary)

    
})



