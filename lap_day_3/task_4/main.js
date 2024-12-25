function capitalize(text ) {
    var word = text.split(" ")
    for (var i =0 ; i < word.length ; i++) {
        word[i] = (word[i][0].toUpperCase() +word[i].slice(1))
     
     }
  return word.join(" ") ;
}
var text1 = "my name is adel ramadan"
console.log(capitalize(text1))

