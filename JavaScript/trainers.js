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