$(document).ready(function(){
    $(document).on('click', '.card', function(event){
        let target = event.target.parentElement
        $('body').append('<div id="overlay"></div><div id="magnify"><div class="card">' +target.innerHTML+'</div></div>')

        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/4
        });
        $('#overlay, #magnify').fadeIn('fast');
    })

    $('body').on('click', '#overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#magnify, #overlay').remove();
        });
      });
})

