
function squr(a) {
    return a * a;
  }
  
  function arrSqur(arr, fun) {
    var arrResult = [];

    for (var i = 0; i < arr.length; i++) { 

      var x = fun(arr[i]);
      arrResult.push(x);
     
    }
    return arrResult;
  }
  
  var numbers = [2, 6, 9, 8, 7];
  console.log(arrSqur(numbers, squr));
  















