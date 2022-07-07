var elbtn = document.querySelector(".header-inner__btn-search") 
var elsearch = document.querySelector(".header-inner__input-search")
function addsearch() {


elsearch.classList.toggle("header-inner__input-search--active")
}

//! ////////////////////////////////////////////////////////////////////////////

var elItem = document.querySelectorAll(".banner-right__list-item");
var elLink = document.querySelectorAll(".banner-right__list-link");
var elSlider = document.querySelectorAll(".banner-right__carusel");

elLink.forEach(function (links) {
  links.addEventListener("click", function (evt) {
    evt.preventDefault();

    elItem.forEach(function (item) {
      item.classList.remove("banner-right__list-item--active")
    });
    links.parentElement.classList.add("banner-right__list-item--active");

    elSlider.forEach(function (item) {
      item.classList.remove("banner-right__carusel--active")
    });
    document.querySelector(links.getAttribute('href')).classList.add("banner-right__carusel--active")
    
  })
  })
  