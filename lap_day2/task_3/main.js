var arr = []

var sum  = 0 ;
var mult = 1 ;
var div = 1 

for(var i = 0 ; i < 3 ; i++) {
    var x = Number(prompt("enter numbers "))
    arr.push(x)
}
function cal (arr) {
    for(var i = 0 ; i < arr.length; i++) {
     sum += arr[i]
     mult*=arr[i]
     mult/=arr[i]
    }
    if(mult == Infinity) {mult = 0 }
    document.writeln(`<h1> sumtion number is ${sum}</h1>`)
    document.writeln(`<h1> mulatiplation  number is ${mult}</h1>`)
    document.writeln(`<h1> divstion  number is ${div}</h1>`)
}

cal(arr)