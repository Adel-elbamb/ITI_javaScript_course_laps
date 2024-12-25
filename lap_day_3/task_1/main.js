
 // console.log(Math.floor(Math.random() * 10));
// console.log()

function rand (arr1) {
    if (arr.length < 2 ) {
        console.log("error array have a tow numbers only ")
    }
    var indexRandom = Math.floor(Math.random() * arr1.length)
    var indexRandom2 ;
     do {
        indexRandom2 = Math.floor(Math.random() * arr1.length)
     }while(indexRandom === indexRandom2)
        
var element = arr1[indexRandom]
var element2 = arr1[indexRandom2]
var elrandom = [element2 ,element]
return elrandom ;
}

var arr = ["adel" , "ramadan " , "saper"]
console.log(rand(arr )) ;