$(document).ready(function(){
    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        mousewheel: true,
        on: {
            slideChange: function(){
                $('header ul li').removeClass('active')
                $('header ul li').eq(this.realIndex).addClass('active')
            },
        }
    });
});