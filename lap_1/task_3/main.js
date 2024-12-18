

var num = prompt("enter number ")

if (num % 3 == 0  && num % 5 == 0) {
     document.writeln(`<button> outpot is </button>`)
     document.writeln(`<h2 style= "border : red 2px solid" ;>  fazzz laaazzz ${num}</h2>`)
    
}else if (num % 3 ==  0 ) {
    document.writeln(`<button> outpot is </button>`)
    document.writeln(`<h2 "border : red 2px solid" ;>fazz ${num} </h2>`)
} else if (num % 5 == 0 ) {
    document.writeln(`<button> outpot is </button>`)
    document.writeln(`<h2 "border : red 2px solid" ;> lazzzzz ${num}</h2>`)
} else {
    document.writeln(`<button> note is  </button>`)
    document.writeln(`<h2 "border : red 2px solid" ;> enter date divasor 3 or 5 </h2>`)
}