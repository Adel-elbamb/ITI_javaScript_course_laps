



function palindrome(text) {
    var y = text.split("").join("")
    var x = text.split("").reverse().join("")
    
    var z  = confirm("enter is upper case or not ") ;
    
    
    if ( z == false ) {
        if (x == y) {
            console.log("palindrome")
        } else {
            console.log("is not palindrome" )
        }
    } else {
        if (x.toLowerCase() == y.toLowerCase()) {
            console.log("palindrome")
        }  else {
            console.log("is not palindrome" )
        }
    } 
}

x = prompt("enter  text ")
palindrome(x)

