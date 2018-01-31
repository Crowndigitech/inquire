// © 2018 Dreams Rewired
// One page business template
// Free for commercial use
//No copyright


//scroll to section
var scrollY = 0;
var distance = 40;
var speed = 20;

function autoScroll(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var yPosUp = currentY - window.innerHeight;
    var animator = setTimeout('autoScroll(\'' + el + '\')', speed);

    if (yPos > bodyHeight) {
        clearTimeout(animator);
    } else {
        if (currentY < targetY - distance) {
            scrollY = currentY + distance;
            window.scroll(0, scrollY);
        } else if(currentY > targetY) {
            scrollY = currentY - distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);
        }
    }
}

function resetScroll(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var animator = setTimeout('autoScroll(\'' + el + '\')', speed);

    if (currentY > targetY) {
        scrollY = currentY - distance;
        window.scroll(0, scrollY);
    } else {
        clearTimeout(animator);
    }

}