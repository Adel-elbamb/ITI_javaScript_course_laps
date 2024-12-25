function sum (a , b) {return a+b}
function tarh (a,b) {return a -b }
function mult (a,b) {return a *b}
function div (a,b){return a /b }

function opration(a , b , fun) {
    return fun(a,b)
}

console.log(opration(4,7,sum))
console.log(opration(4,7,tarh))
console.log(opration(4,7,mult))
console.log(opration(4,7,div))