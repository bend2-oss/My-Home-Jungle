export default () => {
    $('.slider_imageInterier_heart').mouseover(function(e){
        $(e.currentTarget.children).css('stroke', '#DD4646');
    })
    $('.slider_imageInterier_heart').mouseleave(function(e){
        $(e.currentTarget.children).css('stroke', 'black');
    })
    $('.slider_imageInterier_heart').click(function(e){
        $(e.currentTarget.children).css('stroke', '#DD4646');
    })
};