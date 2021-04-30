const closeNav = () => {
    const nav = document.querySelector('ul#menu.list');
    const webpage = document.querySelector('#content_layout');
    const burger = document.querySelector('nav#navigation div.burger');
    const navbar = document.querySelector('#navigation');

    //Check if nav is open. If it is and user click on website, nav will close
    webpage.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.toggle('active');
        }
        if (burger.classList.contains('active')) {
            burger.classList.toggle('active');
        }
        if (navbar.classList.contains('active')) {
            navbar.classList.toggle('active');
        }
    });
}
const navSlide = () => {
    const burger = document.querySelector('nav#navigation div.burger');
    const nav = document.querySelector('ul#menu.list');
    const navbar = document.querySelector('#navigation');
    
    //Toggle NAVIGATION
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
}

closeNav();
navSlide();

