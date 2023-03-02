$(document).ready(function(){
    $(document).on('click', '.card', function(event){

        let target = event.target.parentElement
        if(!(target.classList.contains("card"))) return
        
        $('body').append(`<div id="overlay">
                            
                          </div>
                          <div id="magnify">
                              <div id="close-card"></div>
                              <div id="left"></div>
                              <div id="right"></div>
                              <div class="magnify-card">` +target.innerHTML+`</div>
                          </div>`)

        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/4
        });

        $('#close-card').css({
          right: -($(document).width() - $('#magnify').outerWidth())/2 + 30,
          top: ($(window).height() - $('#magnify').outerHeight())/4 - 25
        });

        $('#left').css({
          left: -70,
          top: ($(window).height() - $('#magnify').outerHeight()) * 3.5
        });

        $('#right').css({
          right: -70,
          top: ($(window).height() - $('#magnify').outerHeight()) * 3.5
        });
        $('#overlay, #magnify').fadeIn('fast');
    })

    $('body').on('click', '#overlay, #close-card', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#magnify, #overlay').remove();
        });
      });
})

