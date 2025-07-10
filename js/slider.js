const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.swiper__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1250: {
            slidesPerView: 4,
            pagination: {
                el: null,
                clickable: true
            },
        },
        768: {
            slidesPerView: 3,
            pagination: {
                el: null,
                clickable: true
            },
        },
        528: {
            slidesPerView: 2,
            pagination: {
                el: '.swiper__pagination',
                clickable: true
            },
        },
    }
});