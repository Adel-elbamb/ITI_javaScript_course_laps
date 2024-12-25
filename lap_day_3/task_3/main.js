var arr = [2,2,2,2,6,4,5, 2, 6, 7, 9, 10, 89, 89, 54, 90, 90];

var secend_big;
var secondSmall;

var sortarry = arr.sort((a, b) => {
  return a - b;
});


for (var i = 0; i < sortarry.length; i++) {
  if (arr[i] < arr[i + 1]) {
    big = arr[i + 1];
    secend_big = arr[i];
  }
}
for (var i = 0 ; i < sortarry.length ; i++) {
    if (sortarry[i] !== sortarry[0]) { 
        secondSmall = sortarry[i];
        break
    }
}

console.log(secend_big);
console.log(secondSmall);






// for(var i = 0 ; i < sortarry.lenght ; i++) {
//     if(sortarry[i] == arr[i+1]) {
//       var x =  sortarry[i]
//       if (i == sortarry.length-1) {sortarry.pop()}
//       if(i == sortarry.length - sortarry.length) {sortarry.shift()}

//     }
// }
// console.log(sortarry);
// var secend_big = arr[length - 2];
// var secondSmall = arr[1];