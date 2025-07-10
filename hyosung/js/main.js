$(document).ready(function(){

    $('header .gnb .gnb_wrap ul.depth1 > li > a:not([target="_blank"])').on('mouseenter', function() {
        $('header').addClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
        $(this).parent('li').addClass('over');
    });
    
    // target="_blank"가 있는 a 태그에 마우스 진입 시 클래스 제거
    $('header .gnb .gnb_wrap ul.depth1 > li > a[target="_blank"]').on('mouseenter', function() {
        $('header').removeClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });
    
    // 마우스가 전체 header 밖으로 나가면 초기화
    $('header').on('mouseleave', function() {
        $('header').removeClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });




    /* ################### visual ####################### */

    const visual_swiper = new Swiper('.visual .swiper', { 
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: {
            el: '.visual .ctrl_wrap .count',
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',
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


    /* #################  center  ####################*/

    const center_swiper = new Swiper('.center .swiper', { 
	slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		769: {
			slidesPerView: 3,    /* 'auto' 라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
        1025: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	},
	centeredSlides: true,
	loop: true,


});

    /* #################  news  ####################*/

    const news_swiper = new Swiper('.news .swiper', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 */

        loop: true,

        pagination: {
            el: '.news .paging',
            clickable: true,
        },
        navigation: {
            nextEl: '.news .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.news .btn_prev',  
        },
    });





})