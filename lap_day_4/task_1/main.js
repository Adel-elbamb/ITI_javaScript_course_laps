
var tagName = document.getElementsByTagName("div")
var len = tagName.length
var clsName = document.getElementsByClassName("contant")
var lencls = clsName.length
var  idName = document.getElementById("result")
var arr = []
arr.push(idName)
var idlen = arr.length
var  usingName = document.getElementsByName("choose")
// var  idName2 = document.getElementById("result")
var lenUsingName = usingName.length

var data = document.getElementsByClassName("data")
function execute() {
     data[0].innerHTML = `<h1> div numbers is : ${len}</h1> 
     <h1> class contany  numbers is : ${len}</h1>
     <h1> idResut numbers is : ${idlen}</h1>
       <h1> name choose  numbers is : ${lenUsingName}</h1>`
}
