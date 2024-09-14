const myLibrary = [];
const btn = document.querySelector("#btn")
const show = document.querySelector("#showModal")
const dialog = document.querySelector("dialog")
//Show modal
show.addEventListener("click", () => {
  dialog.showModal()
})
//book constructor
function Book(author, title, numberPages, read) {
   this.author = author;
   this.title = title;
   this.numberPages = numberPages;
   this.read = read; 
}
//Create book and share with constructor
function addBookToLibrary() {
    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value;
    const numberPages = document.querySelector("#numberPages").value;
    const read = document.querySelector("#read").checked;
    myLibrary.push(new Book(author, title, numberPages, read))
}
//Dialog close and btn Listener
btn.addEventListener("click", (event) => {
    if (document.querySelector("#author").value != "" &&
    document.querySelector("#title").value != "" &&
    document.querySelector("#numberPages").value != "") {
    event.preventDefault()
    addBookToLibrary()
    document.querySelector("#author").value = ""
    document.querySelector("#title").value = ""
    document.querySelector("#numberPages").value = ""
    loop()
    dialog.close()
}
  else {
    alert("Fill all fields")
  }
})
//Add book on the page
function loop() {
    const container = document.querySelector(".library")
    const oneBook = document.createElement("div")
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = document.querySelector("#read").checked
    const del = document.createElement("button")
    del.textContent = "Delete Book"
    del.className = "del"

    container.appendChild(oneBook)

    for(let book in myLibrary) {
        oneBook.innerHTML = "<h3>Author:</h3>" + `<p>${myLibrary[book].author}</p>` +"<h3>Title:</h3>"+ `<p>${myLibrary[book].title}</p>` +"<h3>Number of pages:</h3>"+ `<p>${myLibrary[book].numberPages}</p>` + "<h3>Read/Unread:</h3>"
        oneBook.appendChild(checkbox)
        oneBook.appendChild(del)
    }
//Button for delete book
del.addEventListener("click", () => {
  del.parentElement.remove()
})
}

