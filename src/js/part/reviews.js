(function () {
    if (!!document.querySelector('.swiper-reviews')) {
        const swiperReviews = new Swiper('.swiper-reviews', {
            spaceBetween: 40,
            loop: true,
            speed: 800,
            autoHeight: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
})();