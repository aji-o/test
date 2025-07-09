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

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .ctrl_wrap .count', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',
        },

        // navigation: {  /* 이전, 다음 버튼 */
        //     nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
        //     prevEl: '.swiper-button-prev',  
        // },

    });

    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */

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

    const center_swiper = new Swiper('.center .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 5,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
	centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	// autoplay: {  /* 팝업 자동 실행 */
	// 	delay: 2500,
	// 	disableOnInteraction: true,
	// },

});
// swiper.autoplay.stop();  /* 일시정지 기능 */
// swiper.autoplay.start();  /* 재생 기능 */

})