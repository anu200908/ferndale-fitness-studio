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


/*Feature Animation*/

const features= document.querySelectorAll('.feature');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }
    });

});

features.forEach(feature => {

    observer.observe(feature);

});

/*Botton Hover Console Log*/

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        console.log('Button Clicked');

    });
    
});

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