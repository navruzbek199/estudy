
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
    document.body.style.overflow = "visible"
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    document.body.style.overflow = "hidden"
  }
}

hamburger.addEventListener("click", toggleMenu);




const sliderBox = document.querySelector('.slider__box')
const sliderItems = document.querySelectorAll(".slider__item")
const itemLength = sliderItems.length
const preView = 2

let totalScroll = 0;
sliderBox.style.setProperty('--per-view', preView)

for (let i = 0; i < preView; i++) {
  sliderBox.insertAdjacentHTML('beforeend', sliderItems[i].outerHTML)
}


let autoScroll = setInterval(scrolling, 1500);


function scrolling() {
  totalScroll++

  if (itemLength + 1 === totalScroll) {
    totalScroll = 1;
    sliderBox.style.transition = '0s'

    sliderBox.style.left = '0px';
    clearInterval(autoScroll)
    autoScroll = setInterval(scrolling, 1500)
  }
  const widthEl = document.querySelector('.slider__box > :first-child').offsetWidth + 24;
  console.log(widthEl);
  sliderBox.style.left = `-${totalScroll * widthEl}px`
  sliderBox.style.transition = '.5s'
}



const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slideActiveClass: "active",
  pagination: {
    el: ".pagination",
    clickable: true
  },
  pagination: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    enabled: true,
    delay: 5000
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});