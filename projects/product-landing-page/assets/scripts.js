/* Variables */

const hamburger = document.getElementById("hamburger-menu");
const main = document.getElementById("main");
const menu = document.getElementById("menu");
const nav_links = document.getElementsByClassName("nav-link");

let isMenuSmall = false;

/* Window Resize */

function SetMenuClass() {
    if (window.screen.width >= 530) {
        // Changes #menu's class to .largeMenu
        menu.classList.remove("smallMenu");
        menu.classList.add("largeMenu");

        // Hides #hamburger-menu and displays #main and #menu
        hamburger.style.display = "none";
        main.style.display = "block";
        menu.style.display = "block";

        isMenuSmall = false;
    } else {
        // Changes #menus class to .smallMenu
        menu.classList.remove("largeMenu");
        menu.classList.add("smallMenu");

        // Shows #hamburger-menu and #main and hides #menu
        hamburger.style.display = "block";
        main.style.display = "block";
        menu.style.display = "none";

        isMenuSmall = true;
    }
}

// Sets the initial #menu class and window resize function
SetMenuClass();
window.onresize = () => SetMenuClass();

/* Hamburger */

document.getElementById("hamburger-menu").onclick = function (event) {
    if (window.getComputedStyle(menu).display === "none") {
        menu.style.display = "flex";
        main.style.display = "none";
    } else {
        menu.style.display = "none";
        main.style.display = "block";
    }
};

/* Controls onclick for #menu on small screens */

for (let i = 0; i < nav_links.length; i++) {
    let link = nav_links[i];

    link.onclick = (event) => {
        if (isMenuSmall) {
            menu.style.display = "none";
            main.style.display = "block";
        }
    };
}