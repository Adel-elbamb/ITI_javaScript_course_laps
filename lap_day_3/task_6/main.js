
  var arrobj ;
function title(library)  {
    arrobj = library.books
      for(var i = 0 ; i < arrobj.length ; i++) {
    console.log(`title is : ${arrobj[i].title}`)
  }
}

var  library1 = {
    books: [
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
      { title: "howo ", author: "George Orwell", year: 1949 },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    ]
  };

  title(library1)