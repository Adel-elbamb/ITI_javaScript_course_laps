
function text (txt) {
    var x = txt.match(/e/ig).length 
    return x 
}

var x = prompt("enter text ")

console.log(text(x));

