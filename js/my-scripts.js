document.getElementById("btn-menu")
  .addEventListener("click", () => {
    let list = document.querySelector(".navbar-list");
    list.style.right = 0;
  });


document.getElementById("btn-menu-close")
  .addEventListener("click", () => {
    let close = document.querySelector(".navbar-list");
    close.style.right = -110 + "%";
  });



var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var swiper2 = new Swiper(".s-2", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".swiper-suggest", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(document).ready(function () {

  $("#search-btn").click("click", (e) => {
    console.log(e);
    $("#search-box").slideDown();
    $(".all-selector").fadeTo(1000, 0.8);
  });

  $("#search-btn-close").on("click", (e) => {
    console.log(e);
    $("#search-box").slideUp();
    $(".all-selector").fadeOut(1000);
  });

  $(".all-selector").click(() => {
    $("#search-box").slideUp();
    $(".all-selector").fadeOut(1000);
  })

})