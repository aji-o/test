$(document).ready(function(){


    let device_status // pc인지 모바일인지 구분하는 값
    let scrolling // 브라우저가 스크롤된 값
    let scroll_prev //이전에 스크롤된 값
    let window_w // 브라우저의 넓이 값
    let mobile_size = 1024 // 모바일로 변경되는 사이트
    let menu_open // 모바일에서 사용할 메뉴가 열렸는지의 여부
    
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            // console.log('마우스오버')
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        } //if 종료
    }) //메뉴오버 종료 mouseenter

    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })








    /* ############  visual swiper ---- start ############# */


    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */


    $('.visual .visual_item .ctrl_wrap button.button-stop').on('click', function(){
        console.log('정지버튼 클릭')
        visual_swiper.autoplay.stop(); /* 일시정지 */
        $(this).hide()
        $('.visual .visual_item .ctrl_wrap button.button-play').show()
    })
    $('.visual .visual_item .ctrl_wrap button.button-play').on('click', function(){
        // console.log('재생버튼 클릭')
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .visual_item .ctrl_wrap button.button-stop').show()
    })

        /* ############  visual swiper ---- end ############# */
        





})