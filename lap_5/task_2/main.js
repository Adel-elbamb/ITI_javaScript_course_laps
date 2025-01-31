var right = document.getElementById("right");
var left = document.getElementById("left");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var images = document.querySelectorAll("img");
console.log(images);

var count = 0;

function rightClick() {
    if (count === images.length - 1) {
        count = 0;
    } else {
        count++;
    }
    // images.forEach((img) => {
    //     img.style.zIndex = 0;
    // });
     for(var i = 0 ; i < images.length ; i++) {
        images[i].style.zIndex = 0
     }
    images[count].style.zIndex = 1;
}


function leftClick() {
    if(count == images.length -1) {
        count = 0 
    }else {
        count++
    }
    for(var i = 0 ; i < images.length ; i++) {
        images[i].style.zIndex = 0
     }
    images[count].style.zIndex = 1;
}

function startClick() {
  
    for (var i = 0; i < images.length; i++) {
        images[i].style.zIndex = 0;
    }


 
    images[count].style.zIndex = 1;



    count++;
    if (count === images.length) {
        count = 0;
    }

    console.log("Current Image:", images[count]);
    console.log("Next Count:", count);
}

let interval;

function startAutoplay() {
    interval = setInterval(startClick, 2000); 
}

function stopAutoplay() {
    console.log(stop)
    clearInterval(interval);
}

start.addEventListener("click", startAutoplay);
stop.addEventListener("click", stopAutoplay);
left.addEventListener("click" , leftClick)
right.addEventListener("click", rightClick);
