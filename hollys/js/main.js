$(document).ready(function(){


        /* ################### visual ####################### */

    const visual_swiper = new Swiper('.visual .swiper', { 
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 */
        loop: true,

        pagination: {
            el: '.visual .ctrl_wrap .count',
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },

    });

    $('.visual .ctrl_wrap button.button-stop').on('click', function(){
        visual_swiper.autoplay.stop(); /* 일시정지 */
        $(this).hide()
        $('.visual .ctrl_wrap button.button-play').show()
    })
    $('.visual .ctrl_wrap button.button-play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_wrap button.button-stop').show()
    })



}) // $(document).ready