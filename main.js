console.log('salam');
/* - - - - - show menu--------------*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
/* - - - - - - menu show------------*/
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    document.body.classList.add('no-scroll');
  });
}
/* - - - hide show-----------------*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    document.body.classList.remove('no-scroll');
  });
}
/* - - - - - - - - - countdown-------*/

let countDownDate = new Date("September 27, 2024 :00:00").getTime();
let x = setInterval(function(){
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
  
  if(distance < 0){
    clearInterval(x);
    document.getElementById("days").innerHTML = 00;
    document.getElementById("hours").innerHTML = 00;
    document.getElementById("minutes").innerHTML = 00;
    document.getElementById("seconds").innerHTML = 00;
  }
  document.querySelector("#days-1").innerHTML = days;
  document.querySelector("#hours-1").innerHTML = hours;
  document.querySelector("#minutes-1").innerHTML = minutes;
  document.querySelector("#seconds-1").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#days-1").innerHTML = 00;
    document.querySelector("#hours-1").innerHTML = 00;
    document.querySelector("#hours-1").innerHTML = 00;
    document.querySelector("#seconds-1").innerHTML = 00;
  }
  
},1000);
/* - - - - - image gallery-------*/
function imgGallery() {
  const mainImg = document.querySelector('.details-img'),
  smallImg = document.querySelectorAll('.details-small-img');
  
  smallImg.forEach((img) => {
    img.addEventListener('click', function() {
      mainImg.src = this.src;
    })
  })
}

imgGallery();

/* - - - - - - swiper category*/
var swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  loop: true, 
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/***------------product tabs-------*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });
    
    target.classList.add('active-tab');
    
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
    tab.classList.add('active-tab');
    
  });
});
/*       - - - - - - swiper products*/
var swiperProducts = new Swiper(".new-container", {
  spaceBetween: 24,
  loop: true, 
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


/*Top up btn */

let upo = document.querySelector(".topup");
window.onscroll = function() {
  if (window.scrollY >= 1500) {
    upo.style.cssText = "visibility:visible;opacity:0.8";
  } else {
    upo.style.cssText= "visibility:hidden;opacity:0";
  }
};
upo.addEventListener("click", function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});


/*      pre loader      */
let loader = document.querySelector(".load");
window.addEventListener("load",function (){
  setTimeout(()=>{
    loader.style.display = "none";
    console.log("loaded");
  }, 2000)
});
