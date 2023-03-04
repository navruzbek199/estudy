const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close_icon");
const menuIcon = document.querySelector(".menu_icon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

const dropdownBtn = document.getElementById("btn_lang");
const dropdownMenu = document.getElementById("dropdown_lang");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    }
});

const profileBtn = document.getElementById("profile");
const dropdownProfile = document.getElementById("dropdown_profile");
const toggleIcon = document.getElementById("icon_profile");
// Toggle dropdown function
const toggleIcons = function () {
    dropdownProfile.classList.toggle("active");
    toggleArrow.classList.toggle("icon_profile");
};

// Toggle dropdown open/close when dropdown button is clicked
profileBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleIcons();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
    if (dropdownProfile.classList.contains("active")) {
        toggleIcons();
    }
});