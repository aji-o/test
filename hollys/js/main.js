$(document).ready(function(){

    let device_status //모바일 pc 구분
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환되는 사이즈
    let menu_open // 모바일에서 사용할 메뉴가 열렸는지의 여부

    
    function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size ){
            device_status = 'pc'
        }else{ // 같거나 작으면
            device_status = 'mobile'
        }
    }


    $(window).resize(function(){ //리사이즈 될때마다 1번 실행
    resize_chk()
    })

    resize_chk() //함수의 실행


    /* 메뉴 오버 */

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('mouseenter focusin', function() {
        if (device_status === 'pc') {
            $('header').addClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $(this).parent('li').addClass('over');
        }
    });

    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
    })

    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })








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


        /* ################### product ####################### */


        const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
            slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 16,
            breakpoints: {
                640: {
                    slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                    spaceBetween: 24,
                },
            },
            navigation: {
                nextEl: '.product .tap_item .ctrl_wrap .btn_prev',
                prevEl: '.product .tap_item .ctrl_wrap .btn_next',
            },
        });

        //tap
        $('.product .list .tap_list ul li').on('click', function(){
        
            if($(this).hasClass('active') == false){
                find_content = $(this).attr('data-content')
    
                $('.product .list .con_wrap .tap_item').removeClass('active')
                $('.product .list .con_wrap').find('#'+find_content).addClass('active')
    
                $('.product .list .tap_list ul li').removeClass('active')
                $(this).addClass('active')
    
                $('.product .list .tap_list ul li button span').text('')
                $(this).find('span').text('선택됨')
    
                $('.product .list .tap_list ul li').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')
            }
        })


    


}) // $(document).ready