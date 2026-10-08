
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#main-nav");
if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        navigation.classList.toggle("menu-open");
    });
}

const themeButton = document.querySelector("#theme-toggle");
if (themeButton) {
    const savedTheme = localStorage.getItem("studenthub-theme");
    if (savedTheme === "dark") document.body.classList.add("dark-theme");
    themeButton.setAttribute("aria-pressed", String(document.body.classList.contains("dark-theme")));
    themeButton.textContent = document.body.classList.contains("dark-theme") ? "Use light theme" : "Use dark theme";
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("studenthub-theme", isDark ? "dark" : "light");
        themeButton.setAttribute("aria-pressed", String(isDark));
        themeButton.textContent = isDark ? "Use light theme" : "Use dark theme";
    });
}

const notice = document.querySelector("#notice");
const dismissButton = document.querySelector("#dismiss-notice");
if (notice && dismissButton) dismissButton.addEventListener("click", function () { notice.hidden = true; });

const slides = ["Find student information and helpful links in one place.", "Explore campus activities on the Events page.", "Use the navigation menu to visit every StudentHub page."];
let slideNumber = 0;
const slideText = document.querySelector("#slide-text");

function showSlide() 
{
     if (slideText) slideText.textContent = slides[slideNumber];
 }
const next = document.querySelector("#next-slide");
const previous = document.querySelector("#previous-slide");

if (next) next.addEventListener("click", function () 
    {
         slideNumber = (slideNumber + 1) % slides.length; showSlide(); 
    });
if (previous) previous.addEventListener("click", function ()
     {
         slideNumber = (slideNumber - 1 + slides.length) % slides.length; showSlide(); });

const modal = document.querySelector("#info-modal");
const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
if (modal && openModal && closeModal)
 {
    openModal.addEventListener("click", function () { modal.showModal(); });
    closeModal.addEventListener("click", function () { modal.close(); });
}
