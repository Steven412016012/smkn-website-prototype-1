const burgerMenu = document.querySelector("#burgerMenu")
const navbarMenu = document.querySelector("#navbarMenu")
const contactNav = document.querySelector("#contactNav")

/* navbar */
burgerMenu.addEventListener("click", function(){
    burgerMenu.classList.toggle("burger-active")
    navbarMenu.classList.toggle("hidden");
    contactNav.classList.toggle("hidden");   
});

/* carousell */
const carousell = document.querySelector(".carousell")

let StartImage = false, ImgPageX, ImgLeftScroll;

carousell.addEventListener("mousedown", imageDown = (e) => {
    StartImage = true;
    ImgPageX = e.pageX;
    ImgLeftScroll = carousell.scrollLeft;
});

carousell.addEventListener("mousemove", imageMove = (e) => {
    if (!StartImage) return;
    e.preventDefault;
    let position = e.pageX - ImgPageX;
    carousell.scrollLeft = ImgLeftScroll - position;
});

carousell.addEventListener("mouseup", imageUp = () => {
    StartImage = false;
});

/* scroll reveal */
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
 });

 ScrollReveal().reveal('#hero', {
     delay: 500 
});

ScrollReveal().reveal('#content', {
     delay: 500,
     origin: 'left'
});

ScrollReveal().reveal('#about', {
     delay: 500,
     origin: 'right'
});

ScrollReveal().reveal('#jurusan', {
     delay: 500,
});

ScrollReveal().reveal('#extra', {
    delay: 500,
});

ScrollReveal().reveal('#news', {
    delay: 500,
});

ScrollReveal().reveal('#docs', {
    delay: 500,
});

ScrollReveal().reveal('#testi', {
    delay: 500,
    origin: 'left'
});



