$('.card').hover(function(){
    $(this).children('.card-image').css({
        'filter':'brightness(40%)',
        'transition':'1s'
    })
    $(this).children('.card-button').fadeIn()
    $(this).children('.card-button-like').fadeIn()
    // console.log('there');
}, function(){
    $(this).children('.card-image').css({
        'filter':'brightness(100%)',
        'transition':'1s'
    })
    $(this).children('.card-button').fadeOut()
    $(this).children('.card-button-like').fadeOut()
    
})