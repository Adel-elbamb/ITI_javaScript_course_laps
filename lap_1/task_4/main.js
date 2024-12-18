var game = confirm("Do you fly")

if (game == true ) {
   var qu2 = confirm("are you windy")
   if(qu2 == true) {
    document.writeln(`<h1 style="border : red solid 2px "> yes </h1>`)
    document.writeln(`<img src="1.png"/>`)
} else  {
   
    document.writeln(`<h1 style="border : red solid 2px "> No  </h1>`)
    document.writeln(`<img src="2.png"/>`)
} 
}else if (game == false ) {
    var qu3 = confirm("do live undersea") 
    if(qu3 == true) {
        var qu4 = confirm("are you windy") 
        if(qu4 == true) {
           
            document.writeln(`<img src="3.png"/>`)
        } else  {
           
           
            document.writeln(`<img src="4.png"/>`)
        } 

    } else  {
       
        var qu4 = confirm("are you windy ") 
        
        if(qu4 == true) {
           
            document.writeln(`<img src="5.png"/>`)
        } else  {
           
           
            document.writeln(`<img src="6.png"/>`)
        } 
    } 
} else {
    document.writeln(`<img src="7.png"/>`)
}
