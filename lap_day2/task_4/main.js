var arr1 = []


function arange(arr) {

    for(var i = 0 ; i < 5 ; i++) {
        var x = Number(prompt("enter numbers "))
        arr.push(x)
        // document.writeln(`<h1>valeau sorted desending${arr[i]}</h1>`)
    }
     var x = arr 
    var desin = arr.sort((a,b)=> a - b )
    // var Asanding = arr.sort((a,b)=>{return b - a  })
    document.writeln(`<h1>valeau sorted desending ${desin}</h1>`)
// document.writeln(`<h1>valeau sorted desending ${Asanding}</h1>`)
console.log(desin);
console.log(Asanding);



}



arange(arr1)



// var arr = [1,2777,88,99]
//     var desin = arr.sort((a,b)=>{return a - b })
//     var Asanding = arr.sort((a,b)=>{return b - a  })

//     console.log(desin);
//     console.log(Asanding);
    







