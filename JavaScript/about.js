/*Menu Toggle*/

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});

const navLinks = document.querySelectorAll('#mobileNav a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

/*Gallery*/

const track =
document.querySelector(".carousel-track");

const slides =
document.querySelectorAll(".carousel-track img");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");

const dots =
document.querySelectorAll(".dot");

let currentIndex = 0;

function updateCarousel(){

    track.style.transform =
    `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    dots[currentIndex]
    .classList.add("active");

}

/* Next */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    updateCarousel();

});

/* Previous */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }

    updateCarousel();

});

/* Dots */

dots.forEach((dot,index) => {

    dot.addEventListener("click", () => {

        currentIndex = index;

        updateCarousel();

    });

});

/* Auto Slide */

setInterval(() => {

    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    updateCarousel();

}, 5000);

/*cookie*/

const banner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptCookies");

if (localStorage.getItem("cookieConsent") === "accepted") {
    banner.style.display = "none";
}

acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
});