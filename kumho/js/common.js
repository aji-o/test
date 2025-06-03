// header, footer 에 들어가는 자바스크립트(jquery)

/*

* pc와 모바일 버전을 구분
* 스크롤된값 계산
* 스크롤을 내리면 header에 fixed 클래스 추가
* 메뉴에 마우스 올리면 header에 menu_over 클래스 추가
* 메뉴를 오버한 li에 over 클래스 추가


* 스크롤을 내릴때는 gnb_up 클래스 추가
* 스크롤을 올릴때는 gnb_up 클래스 삭제

---------> 이전의 스크롤값과 현재 스크롤값을 비교해서
                현재값이 더 크면 내려가는중 ( 100 -> 200 )

---------> 이전값이 더 크면 올라가는 중 ( 200 -> 100 ) 

*/

let device_status // pc인지 모바일인지 구분하는 값
let scrolling // 브라우저가 스크롤된 값
let scroll_prev //이전에 스크롤된 값
let window_w // 브라우저의 넓이 값
let mobile_size = 1024 // 모바일로 변경되는 사이트

$(window).scroll(function(){ //브라우저가 스크롤될떄마다 1번 실행
    //console.log('스크롤스크롤된다된다')
    scroll_chk()
})

$(window).resize(function(){ //리사이즈 될때마다 1번 실행
    //console.log('브라우저 크기 변환중')
    resize_chk()
})

$(document).ready(function(){ //문서가 로딩되고 단 1번 실행
    //console.log('로딩완료')
    resize_chk() //함수의 실행
    scroll_chk()


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



    /****************************모바일 메뉴 열고 닫기 ******************************* */

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

})

//함수의 선언
function resize_chk(){
    window_w = $(window).width()
    console.log(window_w)
    if(window_w > mobile_size ){
        device_status = 'pc'
    }else{ // 같거나 작으면
        device_status = 'mobile'
    }
    //console.log(device_status)
}

function scroll_chk(){
    scroll_prev = scrolling  // 스크롤값을 다시계산하기 전에 이전값을 prev 에 저장 
    scrolling = $(window).scrollTop()
    console.log(scroll_prev, scrolling)
    if(scrolling > 0){ //조금이라도 스크롤됐으면
        $('header').addClass('fixed')
        if(scrolling > scroll_prev){
            //console.log('내려가는중')
            $('header').addClass('gnb_up')
        }else{
            //console.log('올라가는중')
            $('header').removeClass('gnb_up')

        }
    }else{ //맨위로가면
        $('header').removeClass('fixed')
    }
}