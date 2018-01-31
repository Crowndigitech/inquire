// © 2018 Dreams Rewired
// One page business template
// Free for commercial use
//No copyright

var navButton = document.querySelector(".fa-bars");
var navMenu = document.querySelectorAll(".menuList");

//navigation button control
navButton.onclick = function () {
    navMenu.forEach(element => {
        element.classList.toggle("showNav");
    });
};
