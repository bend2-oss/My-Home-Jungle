let currentElem = null

$(document).on('mouseover', '.card', function(event){

    if(currentElem) return

    let target = event.target.closest('.card')

    if(!target) return

    currentElem = target

    let buttons = $(this).children('.buttons-container')
    $(this).children('.card-image').css({
        'filter':'brightness(40%)',
        'transition':'1s'
    })
    buttons.children('.card-button').fadeIn()
    buttons.children('.card-button-like').fadeIn()
})

$(document).on('mouseout', '.card', function(event){

    if(!currentElem) return

    let relatedTarget = event.relatedTarget

    while(relatedTarget){
        if(relatedTarget == currentElem) return;

        relatedTarget = relatedTarget.parentNode;
    }

    currentElem = null
    let buttons = $(this).children('.buttons-container')
    
    $(this).children('.card-image').css({
        'filter':'brightness(100%)',
        'transition':'1s'
    })
    buttons.children('.card-button').fadeOut()
    buttons.children('.card-button-like').fadeOut()

})

// $('.card').hover(function(){
// $(this).children('.card-image').css({
//     'filter':'brightness(40%)',
//     'transition':'1s'
// })
// $(this).children('.card-button').fadeIn()
// $(this).children('.card-button-like').fadeIn()
// // console.log('there');
// }, function(){
// $(this).children('.card-image').css({
//     'filter':'brightness(100%)',
//     'transition':'1s'
// })
// $(this).children('.card-button').fadeOut()
// $(this).children('.card-button-like').fadeOut()

// })


// $(document).on('mouseover', '.card', function(){
//     $(this).children('.card-image').css({
//         'filter':'brightness(40%)',
//         'transition':'1s'
//     })
//     $(this).children('.card-button').fadeIn()
//     $(this).children('.card-button-like').fadeIn()
//     console.log('there');
// })

// $(document).on('mouseout', '.card', function(){
//     $(this).children('.card-image').css({
//         'filter':'brightness(100%)',
//         'transition':'1s'
//     })
//     $(this).children('.card-button').fadeOut()
//     $(this).children('.card-button-like').fadeOut()
// })


