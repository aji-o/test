$(document).ready(function(){

    
    $('.contents .news > ul > li').on('click', function(){
        $('.contents .news > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    $('.notice .popup_btn').on('click', function(){
        $('layer_popup').show()
    })
    $('.notice .close button').on('click', function(){
        $('layer_popup').hide()
    })

    $('header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        $('header .gnb ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $('header').addClass('menu_over')
    })

    $('header .gnb ul.depth1 > li').on('mouseleave', function(){
        $('header .gnb ul.depth1 > li').removeClass('active')
        $('header').removeClass('menu_over')
    })

    $('.slide').on('focusin', function(){
        $('header .gnb ul.depth1 > li').removeClass('active')
        $('header').removeClass('menu_over')
    })

})