console.log ('Margarita Zakharova') ; 

var bookform = {
  "fname" : "" ,
  "lname" : "" ,
  "title" : "" ,
  "author" : "" ,
  "cover" : "" ,
  "numofpages" : "" ,
  "price" : "" ,
  "currency" : "" ,
  "language" : "" ,
  "pubdate" : "" ,
  "genre" : "" ,
  "agerestriction" : ""
}

function getFname() {
  bookform.fname = document.getElementById("fname").value;
  console.log(bookform.fname)
}

function getLname() {
  bookform.lname = document.getElementById("lname").value;
  console.log(bookform.lname)
}

function getTitle() {
  bookform.title = document.getElementById("title").value;
  console.log(bookform.title)
}

function getAuthor() {
  bookform.author = document.getElementById("author").value;
  console.log(bookform.author)
}
	 
function getCoverType() {
  bookform.cover = document.getElementById("covertype").value;
  console.log(bookform.cover)
}

function getNumOfPages() {
  bookform.numofpages = document.getElementById("numofpages").value;
  console.log(bookform.numofpages)
}

function getPrice() {
  bookform.price = document.getElementById("price").value;
  console.log(bookform.price)
}

function getCurrency() {
  bookform.currency = document.getElementById("currency").value;
  console.log(bookform.currency)
}

function getPubDate() {
  bookform.pubdate = document.getElementById("pubdate").value;
  console.log(bookform.pubdate)
}

function getGenre() {
  bookform.pubdate = document.getElementById("genre").value;
  console.log(bookform.genre)
}

function getAgeRestriction() {
  bookform.pubdate = document.getElementById("agerestriction").value;
  console.log(bookform.agerestriction)
}
