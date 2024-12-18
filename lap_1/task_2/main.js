var n = prompt("enter number you wont to make sum ")
var sum = 0 ;
for (var i =  1; i <n  ; i++) {
 var num = Number( prompt(`enter number ${i+1}`))

   isNaN(num)?num = Number( prompt(`enter number ${i+1}`)): true ;
  sum += num 
   if (num == 0  || sum > 100) {
    document.writeln(`stoppped !  \n`)
    break
   }

}

document.writeln(`sum is = ${sum}`)



// var n = prompt("enter number you wont to make sum ")
// var sum = 0 ;
//  var i = 0 ;
// do {
//     var num = Number( prompt(`enter number ${i+1}`))
//   isNaN(num)?true: document.write("enter number");
//   sum += num 
//    if (num == 0  || sum == 100) {
//     document.write(`stoppped ! number is equl 0 or greater than 100`)
//     break
//    }
//      i++ ;
// }
// while (i <5 );