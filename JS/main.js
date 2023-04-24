
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const BtnList=document.querySelector(".bars");
const Modal=document.querySelector('.modal');
BtnList.addEventListener('click',function(event){
 Modal.classList.add('open');
})
const Overlay=document.querySelector(".modal_overlay");
Overlay.addEventListener('click',function(event){
  Modal.classList.remove('open');
})
