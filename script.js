let works1 = document.querySelectorAll(".img1");
let works2 = document.querySelectorAll(".img2");
if (navigator.userAgent.match(/firefox|fxios/i)) {
    works1.forEach(function(image) {
        image.style.width = "70%";
    });
    works2.forEach(function(image) {
        image.style.width = "70%";
    });
} 