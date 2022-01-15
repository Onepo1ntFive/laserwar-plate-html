(function () {

    let windowWidth = window.innerWidth;
    let swiper = undefined;

    function initGallery() {
        windowWidth = window.innerWidth;

        if (windowWidth >= 768 && swiper !== undefined) {
            console.log('destroy')
            swiper.destroy(false, true);
            swiper = undefined;
        } else if (windowWidth < 768 && swiper === undefined) {
            console.log('init')
            swiper = new Swiper('.swiper', {
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
    window.addEventListener('resize', function (event) {
        initGallery()
    }, true);

})();