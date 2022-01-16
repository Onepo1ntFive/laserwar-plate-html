(function () {
    if (!!document.querySelector('.swiper-gallery')) {
        let windowWidth = window.innerWidth;
        let swiperGallery = undefined;

        function initGallery() {
            windowWidth = window.innerWidth;

            if (windowWidth >= 768 && swiperGallery !== undefined) {
                swiperGallery.destroy(false, true);
                swiperGallery = undefined;
            } else if (windowWidth < 768 && swiperGallery === undefined) {
                swiperGallery = new Swiper('.swiper-gallery', {
                    spaceBetween: 100,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                });
            }
        }

        initGallery();
        window.addEventListener('resize', function () {
            initGallery()
        }, true);
    }

})();