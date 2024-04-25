
$(function() {
  $('.slider__container').slick({
    dots: false,
    slidesShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed: 2000,
    prevArrow: '<button type="button" class="slick-arrows slick-prev"><img src="images/arrow-left.png" alt="prev"/></button>',
    nextArrow: '<button type="button" class="slick-arrows slick-next"><img src="images/arrow-right.png" alt="next"/></button>',
    responsive: [{
      breakpoint: 475,
      settings: {}
    }, ]
  });
});

//burger 
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');
mobileNavButton.addEventListener('click', function () {
mobileNavIcon.classList.toggle('active');
mobileNav.classList.toggle('active');
});

//popup

function popupToggle(){
  const popup = document.getElementById('popup');
  popup.classList.toggle('active');
}



//tabs
jQuery(document).ready(function($) {
  $('.usefull-links').click(function() {
    $(this).parents('.bg').find('.links').toggleClass('open');
    $(this).parents('.bg').find('.flaticon-down-arrow').toggleClass('open');
  });
});