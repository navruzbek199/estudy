// const Swiper = new Swiper(".swiper", {
//   slidesPerView: 3,
//   spaceBetween: 50,
//   loop: true,
//   grabCursor: true,
//   centeredSlides: true,
//   slideActiveClass: "active",
//   pagination: {
//       el: ".pagination",
//       clickable: true
//   },
//   autoplay: {
//       enabled: true,
//       delay: 5000
//   },
//   // Media :{
//   //     breakpoints: {
//   //     // when window width is >= 320px
//   //     320: {
//   //         slidesPerView: 2,
//   //         spaceBetween: 20
//   //     },
//   //     // when window width is >= 480px
//   //     480: {
//   //         slidesPerView: 4,
//   //         spaceBetween: 30
//   //     },
//   //     }
//   // }
//   });

 



const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close_icon");
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





// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }





const a = 78
const res = a.toString("")
console.log(res, "teskari son")