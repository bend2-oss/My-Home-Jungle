// if($('.select-head').text() !== 'Все'){
//     $(this).parent().prepend($('<li class="select-item">Все</li>'))
// }

$('.select-item').on('click', function () {
    // if($('.select-head').text() !== 'Все'){
    //     $(this).parent().prepend($('<li class="select-item">Все</li>'))
    // }

    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
    // $(this).parent().css({
    //     '-webkit-transform': 'scaleY(0)',
    //     '-ms-transform': 'scaleY(0)',
    //     'transform': 'scaleY(0)'
    // });
    console.log(($(this).parent().prev().prev().val()));
});