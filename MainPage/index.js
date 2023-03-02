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


const dropdownBtn1 = document.getElementById("profile");
const dropdownMenu1 = document.getElementById("dropdown_profile");
const toggleArrow1 = document.getElementById("arrow1");
// Toggle dropdown function
const toggleDropdown1 = function () {
    dropdownMenu1.classList.toggle("show");
    toggleArrow1.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown1();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
    if (dropdownMenu1.classList.contains("show")) {
        toggleDropdown1();
    }
});