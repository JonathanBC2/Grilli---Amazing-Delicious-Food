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
})