$(document).ready(function(){

    let scrolling
    let win_h
    
    let slogan = $('.slogan')
    let slogan_obj = $('.slogan p span')
    let slogan_leng = slogan_obj.length
    let slogan_scroll //슬로건 start에서부터 스크롤된 값
    let slogan_top   // 슬로건이 위에서부터 떨어진 거리
    let slogan_start // 애니메이션 시작 위치
    let slogan_end   // 애니메이션 종료 위치
    let slogan_w

    
    function slogan_ani(){

        slogan_top = slogan.offset().top
        slogan_start = slogan_top - win_h + (win_h * 0.3)
        //console.log('scroll', scrolling, 'start', slogan_start)
        // scroll 값과 start 값이 같을 때 애니 시작

        slogan_end = slogan_top + slogan.height() - win_h + (win_h * 0.3)
        //console.log('scroll', scrolling, 'end', slogan_end)
        // scroll 값과 end 값이 같을 때 애니 종료
        slogan_scroll = (scrolling - slogan_start) / (slogan_end - slogan_start) * 100
        //console.log(slogan_scroll)

        if(slogan_start > scrolling){
            //console.log('시작 이전')
            slogan_obj.width(0)
        }else if(slogan_end > scrolling){
            //console.log('애니메이션중')
            //slogan_w = 100/slogan_leng

            for(i=0; i<slogan_leng; i++){
                slogan_w = (slogan_scroll - (100/slogan_leng)*i) * slogan_leng
                if(slogan_w > 100){
                    slogan_w = 100
                }
                slogan_obj.eq(i).width(slogan_w + '%')
            }

            // slogan_w = (slogan_scroll - (100/slogan_leng)*0) * slogan_leng
            // slogan_obj.eq(0).width(slogan_w + '%')

            // slogan_w = (slogan_scroll - (100/slogan_leng)*1) * slogan_leng
            // slogan_obj.eq(1).width(slogan_w + '%')

            // slogan_w = (slogan_scroll - (100/slogan_leng)*2) * slogan_leng
            // slogan_obj.eq(2).width(slogan_w + '%')

        }else{
            //console.log('종료 이후')
            slogan_obj.width('100%')
        }

    } // slogan_ani






    
    let photo = $('.banner .photo')
    let photo_top
    let photo_start
    let photo_end
    let photo_scroll
    let photo_w_start = 30 // 시작할때 넓이 ...는 이걸로 조절
    let photo_w_end = 100
    let photo_w

    function photo_resize(){
        photo_top = photo.offset().top
        photo_start = photo_top - (win_h * 0.7) //높이는 0.7 < 이걸로 조절
        photo_end = photo_top + photo.height() - (win_h * 0.7)
        photo_scroll = ( scrolling - photo_start) / (photo_end - photo_start) * 100
        //console.log('scroll', photo_scroll)

        if(photo_start > scrolling){
            //console.log('시작 전')
            photo.width(photo_w_start + '%')
        }else if(photo_end > scrolling){
            //console.log('애니메이션 중')
            photo_w = ((photo_w_end - photo_w_start) / 100 * photo_scroll) + photo_w_start
            console.log(photo_w)
            photo.width(photo_w + '%')
        }else{
            //console.log('종료')
            photo.width(photo_w_end + '%')
        }
    }











    let dark = $('.life')
    let dark_top   // life가 위에서부터 떨어진 거리
    let dark_start // 애니메이션 시작 위치... 종료 위치는 없다

    
    function dark_bg(){
        dark_top = dark.offset().top
        dark_start = dark_top - scrolling - (win_h * 0.3)
        //console.log('scroll', scrolling, 'top', dark_top, 'start', dark_start)
        if(dark_start < 0){
            dark.addClass('dark')
        }else{
            dark.removeClass('dark')
        }
    }









    scroll_chk() //브라우저가 로딩됐을 때 1번 실행
    risize_chk()
    slogan_ani()
    dark_bg()

    $(window).scroll(function(){
        //스크롤 할때마다 실행
        scroll_chk() 
        slogan_ani()
        dark_bg()
        photo_resize()
    })
    
    $(window).resize(function(){
        // 브라우저가 리사이즈 될때마다 1번씩 실행
        slogan_ani()
        risize_chk()
        dark_bg()
        photo_resize()
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        //console.log('스크롤값', scrolling)
    }//scroll_chk

    function risize_chk(){
        win_h = $(window).height()
        //console.log('브라우저높이', win_h)
    }

    
}) //$(document).ready