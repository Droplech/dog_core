$('.nuv_links ul li').click(function(){
    if( !$(this).hasClass('active') ){
        $(this).addClass('active')
        $(this).find('.links_toggle_menu').fadeIn()
        
    }else{
        $(this).removeClass('active')
        $(this).find('.links_toggle_menu').fadeOut()
    }
})



$('.burger').click(function(){
    $('.mob_menu_content').css({
        'right':'0',
        'transition':'.2s'
    })
})
$('.button_close').click(function(){
    $('.mob_menu_content').css({
        'right':'-100vw',
        'transition':'.2s'
    })
})

$('.mob_menu_item').click(function(){
    if( !$(this).find('.menu_item_title').hasClass('active')){
        $(this).find('.menu_item_title').addClass('active')
        $(this).find('.item_toggle_menu').slideDown()
        $(this).find('.menu_item_title .icon-down-open').css({
            'transform':'rotate(180deg)',
            'transition': '.3s'
        })

    }else{
        $(this).find('.menu_item_title').removeClass('active')
        $(this).find('.item_toggle_menu').slideUp()
        $(this).find('.menu_item_title .icon-down-open').css({
            'transform':'rotate(0deg)',
            'transition': '.3s'
        })
    }
})