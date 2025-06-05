$(document).ready(function(){
    
    /************************** visual - swiper 시작 *********************** */

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.button-prev',  
        },

    });

    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .ctrl_wrap button.button-stop').on('click', function(){
        // console.log('정지버튼 클릭')
        visual_swiper.autoplay.stop(); /* 일시정지 */
        $(this).hide()
        $('.visual .ctrl_wrap button.button-play').show()
    })
    $('.visual .ctrl_wrap button.button-play').on('click', function(){
        // console.log('재생버튼 클릭')
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_wrap button.button-stop').show()
    })

    /************************** visual - swiper 끝 ************************/


     /***** news swiper :: 시작 *****/

     const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
     slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
     spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
     breakpoints: {
         768: {    /* 768px 이상일때 적용 */
             spaceBetween: 24,
         },
         1024: {    /* 1024px 이상일때 적용 */
         spaceBetween: 24,
     },
     },
     //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
    // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    //  autoplay: {  /* 팝업 자동 실행 */
    //      delay: 2500,
    //      disableOnInteraction: true,
    //  },
     navigation: {
         nextEl: '.news .ctrl_wrap .btn_next',
         prevEl: '.news .ctrl_wrap .btn_prev',
     },
     pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
         el: '.news .ctrl_wrap .count', /* 해당 요소의 class명 */
         clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
         type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
     },
     scrollbar: {
         el: ".news .ctrl_wrap .swiper-scrollbar",
         hide: false,
         draggable: true,
         dragSize: 'auto',
     },
 });

     /***** news swiper ::  끝  *****/

 /************************** survice 배경변경 : 시작 ***********************
  * .survice .list ul li a 에 마우스를 오버해서
    a에 있는 data-name 값을 가져다 list의 class명으로 줌 */


    let service_name // 가져온 data-name 값을 저장
    $('.survice .list ul li a').on('mouseenter', function(){
        if($(window).width() > 1024){
            service_name = $(this).attr('data-name')
            console.log(service_name)
            $('.survice .list').attr('data-bg', service_name)
        }

    })
    $('.survice .list').on('mouseleave', function(){
        $('.survice .list').attr('data-bg', '')
    })

 
 /************************** survice 배경변경 : 끝 *********************** */







})