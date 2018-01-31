// © 2018 Dreams Rewired
// One page business template
// Free for commercial use
//No copyright

var index = 1;
var total = 3;

var texts = ["It's time to plan the future...", "Begin today", "The future is now"]
//change images
function sliderArr(x) {
    var homeBg = document.getElementById("homeBg");
    index = index + x;
    if (index > total) { index = 1; }
    if (index < 1) { index = total; }
    homeBg.src = "public/images/home_bg" + index + ".jpg";
}

window.setInterval(
    function slider() {
        var homeBg = document.getElementById("homeBg");
        index = index + 1;
        if(index > total) {index = 1;}
        if(index < 1) {index = total;}
        homeBg.src = "public/images/home_bg"+ index +".jpg";
}, 5000);

slider();
