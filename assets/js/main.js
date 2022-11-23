/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


// /*=============== ADD/REMOVE LIKES ===============*/
const recommended__like = document.querySelector('.like__1');

const likeAction = () => {
    const rec_like = document.querySelector('#recommended-like-1');

    if (rec_like.classList.contains('liked')) {
        rec_like.classList.remove('liked');
    }
    else
        rec_like.classList.add('liked');
};

recommended__like.addEventListener('click', likeAction);


const recommended__like__2 = document.querySelector('.like__2');

const likeAction2 = () => {
    const rec_like = document.querySelector('#recommended-like-2');

    if (rec_like.classList.contains('liked')) {
        rec_like.classList.remove('liked');
    }
    else
        rec_like.classList.add('liked');
};

recommended__like__2.addEventListener('click', likeAction2);


const recommended__like__3 = document.querySelector('.like__3');

const likeAction3 = () => {
    const rec_like = document.querySelector('#recommended-like-3');

    if (rec_like.classList.contains('liked')) {
        rec_like.classList.remove('liked');
    }
    else
        rec_like.classList.add('liked');
};

recommended__like__3.addEventListener('click', likeAction3);

// const recommended__like__4 = document.querySelector('.like__4');

// const likeAction4 = () => {
//     const rec_like = document.querySelector('#recommended-like-4');

//     if (rec_like.classList.contains('liked')) {
//         rec_like.classList.remove('liked');
//     }
//     else
//         rec_like.classList.add('liked');
// };

// recommended__like__4.addEventListener('click', likeAction4);

// const recommended__like__5 = document.querySelector('.like__5');

// const likeAction5 = () => {
//     const rec_like = document.querySelector('#recommended-like-5');

//     if (rec_like.classList.contains('liked')) {
//         rec_like.classList.remove('liked');
//     }
//     else
//         rec_like.classList.add('liked');
// };

// recommended__like__5.addEventListener('click', likeAction5);

// const recommended__like__6 = document.querySelector('.like__6');

// const likeAction6 = () => {
//     const rec_like = document.querySelector('#recommended-like-6');

//     if (rec_like.classList.contains('liked')) {
//         rec_like.classList.remove('liked');
//     }
//     else
//         rec_like.classList.add('liked');
// };

// recommended__like__6.addEventListener('click', likeAction6);

// const recommended__like__7 = document.querySelector('.like__7');

// const likeAction7 = () => {
//     const rec_like = document.querySelector('#recommended-like-7');

//     if (rec_like.classList.contains('liked')) {
//         rec_like.classList.remove('liked');
//     }
//     else
//         rec_like.classList.add('liked');
// };

// recommended__like__7.addEventListener('click', likeAction7);


/*=============== NEW LIKES TOGGLE ===============*/



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close');

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart');
    });
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart');
    });
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
