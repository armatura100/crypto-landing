// menu burger
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link, .menu__sub-link');

const closeMenu = () => {
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');
    document.body.classList.remove('lock');
}

const toggleMenu = () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
    document.body.classList.toggle('lock');
}

menuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


// append header nav elements to complete the burger menu
const socialList = document.querySelector('.social__list');
const lang = document.querySelector('.lang');
if (window.matchMedia('(max-width: 640px)').matches) {
    menuList.append(lang, socialList);
}


// sub menu dropdown
const menuArrow = document.querySelector('.menu__arrow');

const toggleDropdownMenu = () => {
    menuArrow.parentElement.classList.toggle('active');
    if (window.matchMedia('(max-width: 640px)').matches) {
        const subMenu = menuArrow.nextElementSibling;
        if (menuArrow.parentElement.classList.contains('active')) {
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        } else {
            subMenu.style.maxHeight = 0;
        }
    }
}

menuArrow.addEventListener('click', () => {
    if (window.matchMedia('(any-hover: hover)').matches) {
        menuArrow.removeEventListener('click', toggleDropdownMenu);
    } else if (!window.matchMedia('(any-hover: hover)').matches) {
        toggleDropdownMenu();
    }
});


// header scroll
const header = document.querySelector('.header');
const headerPad = window.getComputedStyle(document.body, '::before')
const rootEl = document.querySelector(':root');
const checkScroll = () => {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add('scrolled');
        rootEl.style.setProperty('--header-height', '70px');
    } else {
        header.classList.remove('scrolled');
        rootEl.style.setProperty('--header-height', '100px');
    }
}

document.addEventListener('DOMContentLoaded', checkScroll);
window.addEventListener('scroll', checkScroll);


// any dropdown element that contains [data-dropdown] (applied to languages dropdown)
const dropDownTrigger = document.querySelectorAll('[data-dropdown]');
dropDownTrigger.forEach(trigger => {
    trigger.addEventListener('click', () => {
        trigger.classList.toggle('active');

        const dropDownElement = trigger.nextElementSibling;
        if (trigger.classList.contains('active')) {
            dropDownElement.style.maxHeight = dropDownElement.scrollHeight + 'px';
        } else {
            dropDownElement.style.maxHeight = 0;
        }
    });
});


// slider
const servicesSlider = document.querySelector('.services__slider');
new Swiper(servicesSlider, {
    // allowTouchMove: false,
    // centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoHeight: true,
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        850: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        1200: {
            spaceBetween: 30,
            slidesPerView: 4,
        },
        1395: {
            spaceBetween: 30,
            slidesPerView: 5,
        }
    }
});


// slider item dropdown
const serviceItems = document.querySelectorAll('.services__item');
if (window.matchMedia('(any-hover: hover)').matches) {
    serviceItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const hiddenPart = item.querySelector('.services__item-hidden');
            hiddenPart.style.maxHeight = hiddenPart.scrollHeight + 'px';
        });

        item.addEventListener('mouseout', () => {
            const hiddenPart = item.querySelector('.services__item-hidden');
            hiddenPart.style.maxHeight = 0;
        });
    });
}


// faq accordion
const faqTriggers = document.querySelectorAll('.faq__item-trigger');
window.addEventListener('load', () => {
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {

            const triggerActive = document.querySelector('.faq__item-trigger.active');
            if (triggerActive && triggerActive !== trigger) {
                triggerActive.classList.toggle('active');
                triggerActive.nextElementSibling.style.maxHeight = 0;
            }

            trigger.classList.toggle('active');
            const content = trigger.nextElementSibling;
            if (trigger.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
    document.querySelector('.faq__item-trigger').click();
});