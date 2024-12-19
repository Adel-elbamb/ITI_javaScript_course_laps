var a = prompt("enter text ")
function cheack(text) {
   

var arr = a.split("")
var arr1 = []
  
for(var i = 0 ; i < arr.length ; i++) {
     if (arr[i] == 'i') {
      arr1.push(i)
     }
}

console.log(arr1)
}

cheack(a)
