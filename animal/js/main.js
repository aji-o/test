$(document).ready(function(){

    /*###** - header 와 메뉴 : 시작 -  ***

    * pc인지 모바일인지 구분 -> 브라우저 넓이로
    * 스크롤값 계산 
    * 공통사항 : 브라우저가 스크롤되면 or 헤더에 오버하면 헤더에 fixed 클래스 추가
    * pc일 때 : 마우스를 오버한 li에만 over 클래스 추가
    * 모바일 때 : 메뉴열기 클릭하면 header에 menu_open 클래스 추가
    *             1차메뉴를 클릭하면 (하위메뉴가 있는 1차메뉴 한정) 클릭한 li에 open 클래스 추가 */

    let device_status //모바일인지 pc인지
    let scrolling // 스크롤값
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환되는 사이즈

    scroll_chk() // 함수실행 (처음에 문서가 로딩되었을 때 1번)
    resize_chk()
    $(window).resize(function(){ //브라우저가 리사이즈 될때마다 1번씩 실행
        resize_chk()
    })
    $(window).scroll(function(){ //브라우저를 스크롤할 때마다 한 번씩 실행
        scroll_chk() //함수실행
    })

    function scroll_chk(){ //함수선언
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)
    }

    /* header에 마우스를 오버했을 때 -- 클릭했을 때도 작동함 */
    $('header').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('fixed')
        }
    })

    $('header').on('mouseleave focusout', function(){
        // 브라우저가 스크롤된 상태에서는 header에 fixed 클래스를 삭제하면 안된다!!!
        // 맨 위에 있을 때만 삭제
        if(scrolling <= 0){
            $('header').removeClass('fixed')
        } // if종료
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(this).addClass('over')
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'pc'){
            $(this).removeClass('over')
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })

    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /*
        닫힌 메뉴를 클릭하면 열리고, 열린 메뉴를 클릭하면 닫힘
        동시에 여러개의 메뉴가 열려있을 수도 있음
        toggleClass - 클래스가 없으면 추가하고, 있으면 삭제
    */

    $('header .gnb .gnb_wrap ul.depth1 > li:has(ul.depth2) > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            console.log('클릭')
            $(this).parents('li').toggleClass('open')
        }
    })

    /*###** - header 와 메뉴 : 종료 - ***/




/********************* - visual swiper 시작 - ************************ */

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
             delay: 5000,
             disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap button.btn_prev',  
        },

    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */
    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide() //정지버튼 자신은 숨김
        $('.visual .btn_wrap button.btn_play').show() //재생 나타남
    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show() //정지 나타남
    })

    /********************* - visual swiper 끝 - ************************ */



/***** - find 탭 기능 : 시작 - *****/

    let find_content // 클릭한 메뉴의 이름(id)

    $('.find .list .tap_list ul li').on('click', function(){
        
        if($(this).hasClass('active') == false){
            find_content = $(this).attr('data-content')
            console.log(find_content)
        }

    })




/***** - find 탭 기능 : 끝 - *****/



}) // $(document).ready