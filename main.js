$(function () {
    $('.burger-btn').on('click', function() {
        $(this).toggleClass('active')
        $('.header-nav').toggleClass('active')
        $('body').toggleClass('scroll-lock')
    })

    const swiper = new Swiper('.related-slider1.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesOffsetBefore: 0,
        speed: 1500,
        autoplay: {
            delay: 3500,
        },

        breakpoints: {
            768: {
                slidesOffsetBefore: -560,
            }
        }
    });
    const swiper2 = new Swiper('.related-slider2.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 3500,
        },
    });
}); // end of ready