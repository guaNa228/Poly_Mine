import {langData} from './reverse-language.js';


/* language */
const translateable = ["ru", "uk", "be", "kk"];

const userLang = navigator.languages;
//if (userLang.filter((item) => translateable.includes(item)).length > 0) translate();

function translate() {
    document.querySelector('html').setAttribute("lang", userLang[0]);
    let elements = document.getElementsByTagName("*");
    let neededCounter = 0;
    for (let i = 0; i<elements.length; i++) {
        if (elements[i].tagName!="TITLE" && elements[i].innerText && elements[i].innerText.indexOf("\n")==-1 && 
        !elements[i].classList.contains("parters-grid__item") && !elements[i].parentElement.classList.contains("parters-grid__item") &&
        elements[i].tagName!="DIV" && elements[i].tagName!="H3" && !elements[i].classList.contains("footer-info__email") 
         || (elements[i].parentElement && elements[i].tagName=="P" && elements[i].parentElement.classList.contains("partner-grid__item_become"))) {
            elements[i].innerHTML = langData[neededCounter];
            neededCounter++;
        }
    }
}

/* Mobile menu */
const menuOpenBtn = document.querySelector(".header__top-panel__menu-button");
const menuCloseBtn = document.querySelector(".mobile-menu__close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu__nav a");

menuOpenBtn.onclick = () => {
    menuOpen();
}

menuCloseBtn.onclick = () => {
    menuClose();
}

function menuOpen() {
    mobileMenu.classList.add("mobile-menu_active");
    mobileMenu.classList.remove("mobile-menu_closed");
    mobileMenu.classList.remove("mobile-menu_virgin");
    disableScroll();
}

function menuClose() {
    mobileMenu.classList.remove("mobile-menu_active");
    mobileMenu.classList.add("mobile-menu_closed");
    enableScroll();
}

mobileMenuLinks.forEach((item) => {
    item.onclick = () => {menuClose();}
});

function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}

/* FAQ trigger */

let questions = document.querySelectorAll('.cd-faq__trigger');
questions.forEach((item) => {
    item.addEventListener('click', questionOpen)
});

function questionOpen() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) this.lastElementChild.src = this.lastElementChild.src.replace('plus', 'minus')
    else this.lastElementChild.src = this.lastElementChild.src.replace('minus', 'plus')
}

/* Fast start button */
let fast_start_button = document.querySelector('.header__content_button');
fast_start_button.addEventListener('click', fastStart);
let faqSection = document.querySelector('article#faq');
let how_start = document.querySelector('.how_start');
function fastStart() {
    faqSection.scrollIntoView();
    questionOpen.call(how_start);
}
