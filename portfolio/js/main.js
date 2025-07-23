$(document).ready(function(){
    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        mousewheel: true,
        on: {
            slideChange: function(){
                $('header ul li').removeClass('active');
                $('header ul li').eq(this.realIndex).addClass('active');
            }
        }
    });

    // gnb 클릭 시 swiper 이동
    const sectionMap = {
        'home': 0,
        'profile': 1,
        'hollys': 2,
        'hyoseng': 3,
        'nest': 4,
        'contact': 5
    };

    $('header ul li a').on('click', function(e){
        e.preventDefault();
        const target = $(this).attr('href').replace('#', ''); 
        const index = sectionMap[target];

        if (index !== undefined) {
            swiper.slideTo(index); // Swiper 슬라이드 이동
        }
    });
});