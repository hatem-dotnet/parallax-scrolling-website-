let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let hatem = document.querySelector(".hatem");

window.onscroll = function () {
    let value = scrollY;

    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.left = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3 + "px";

    hatem.style.fontSize = value + "px";

    if (scrollY >= 67) {
        hatem.style.fontSize = "67px";
        hatem.style.position = "fixed";

        if (scrollY >= 246) {
            hatem.style.display = "none";
        } else {
            hatem.style.display = "block";
        }
    } else {
        hatem.style.position = "absolute";
    }

    if (scrollY >= 126) {
        document.querySelector(".main").style.background = "linear-gradient(#78a0e9f2, #7f7def)";
    } else {
        document.querySelector(".main").style.background = "linear-gradient(#200016, #0e001a)";
    }
};
