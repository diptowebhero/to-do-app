// select all
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let btn = document.querySelector(".btn");
let bookList = document.querySelector("#book-list");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (title.value == "" || author.value == "" || year.value == "") {
    alert("Please give a value");
  } else {

    //creating row
    let newRow = document.createElement("tr");

    //creating title
    let newTitle = document.createElement("td");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    //creating author
    let newAuthor = document.createElement("td");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    //creating year
    let newYear = document.createElement("td");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    //displaying ui
    bookList.appendChild(newRow);

    //clear input values
    title.value = "";
    author.value = "";
    year.value = "";
  }
});
