'use strict';


/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded")
})




/**
 * add envent listener on multiple elements
 */

const addEventOnElements = function (elements, evenType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(evenType,callback);
    }
}



/**
 * NAVBAR
 */

const navbar =document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.cla
    ssList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", toggleNavbar)


/**
 * HEADER
 */

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {   
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
    }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
    if (currentSlidePos >= heroSliderItems - 1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length -1;
    } else {
    currentSlidePos--;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        slideNext();
    }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
    clearInterval(autoSlideInterval)
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);