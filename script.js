var bookForm = document.getElementById('add');

const createEl = function(element){
    var newEl = document.createElement(element)
    newEl.setAttribute('class', 'newDidv')
    return newEl
}

const deleteEl = function(element){
    
    element.remove
}

const show = function(library){
    var newDisplay = display.appendChild(createEl('div'))
   
    for(x=0;x<=library.length;x++){
        newDisplay.appendChild(deleteBut())
        // newDisplay.appendChild(readCheck())
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
    button.setAttribute("id","delBut")

    return button
    
}


const readCheck = function(){
    var readIt = document.createElement('input')
    readIt.innerHTML = "Read it"
    readIt.setAttribute('type', "checkbox")

    return readIt
}


document.addEventListener('click',function(e){
    if(e.target.id== 'delBut'){
          //do something
          console.log('teste')
          var elem = e.target
          elem = elem.parentNode
          elem.remove(elem.parentNode)
    }
});

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
        Read It: ${this.read}<br>`
    }
}



bookForm.addEventListener('click', (e) => {
    // e.preventDefault();
    const getTitle = document.getElementById('title').value
    const getAuthor = document.getElementById('author').value
    const getPages = document.getElementById('pages').value
    const getRead = document.getElementById('read')


    if(getRead.checked){
        // getRead.setAttribute('value', 'Yes')

        var checkRead = document.createElement('div') 
        checkRead.appendChild(readCheck())
    }
    else{
        var checkRead = document.createElement('div') 
        checkRead.appendChild(readCheck())
        

    }
    // for(x = 0; x < getRead.length; x++){
        
    //     if(getRead[x].checked){
    //         var checkRead = getRead[x].value
    //         // console.log(getRead[x].value)
    //     }
        
        
    // }
    
    var addToLibrary = new Book(getTitle, getAuthor, getPages, checkRead);
    var myLibrary = []
    myLibrary.push(addToLibrary);
    show(myLibrary)
    
      
})

