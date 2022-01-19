
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu__burger').classList.toggle("animate");
  })

//ПРЕЛОАДЕР

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};

// СЛАЙДЕР НА ГЛАВНОЙ СТРАНИЦЕ

new Swiper('.slider__container',{
    //стрелочки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    grabCursor: true,
    //количество слайдов
    slidesPerView: 3,
    // слайд по центру 
    centeredSlides: true,
    // отступы
    spaceBetween: 30,
    //начальный слайд
    initialSlide: 1,
    //бесконечность 
    loop: true,
    
    breakpoints: {
        849: {
            slidesPerView: 3,
            centeredSlides: true
        },
        659: {
            slidesPerView: 2,
            centeredSlides: false
        },
        300: {
            slidesPerView: 1,
            centeredSlides: false
        }
    }
});

// ЧАСЫ НА ГЛАВНОЙ СТРАНИЦЕ

var clock = document.getElementById('clock');
function hexoClock() {
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if(h.length < 2){
        h = '0' + h;
    }
    if(m.length < 2){
        m = '0' + m;
    }
    if(s.length < 2){
        s = '0' + s;
    }
    
    var clockString = h + ':' + m + ':' + s;
    clock.textContent = clockString;
}
hexoClock();
setInterval(hexoClock, 1000);


