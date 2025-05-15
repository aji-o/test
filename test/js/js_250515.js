/*

js에서 html 요소를 부를때는
html 요소가 로딩된 이후에 불러야함...
문서의 구조상
js를 head 안에서 먼저 부르고,
그다음 body에 html 요소를 씀...

*/


$(document).ready(function(){
    // $('.group').addClass('on')
    console.log('document.ready 안...')

    $('.group').on('mouseenter', function(){
        // group 마우스를 올릴 때마다 실행
        $('.group').addClass('on')
        $('.group span').text('오버후')
    })

    $('.group').on('mouseleave', function(){
        // group 마우스를 올릴 때마다 실행
        $('.group').removeClass('on')
        // -적용되는지 확인용 : console.log('자냐?')
        $('.group span').text('오버전')
    })
    // $(document).ready < 때문에 문서가 로딩되고 단 1번만 실행함!!!  
    let scrolling = $(window).scrollTop()
    console.log(scrolling)

    // 그래서 아래의 명령어를 입력한다. 스크롤마다 1회씩 움직이도록
    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)

    if(scrolling > 0){ // 스크롤값이 0보다 크면~
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
        }
    })

    $('.list ul li').on('mouseenter', function(){
        $(this).addClass('on')
        // li중에서 오버한 li만 지칭...
    })
})  // $(document).ready

console.log('누가 먼저 실행될까요???')