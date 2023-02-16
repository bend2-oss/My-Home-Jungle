export default () => {
    $('.slider_imageInterier_heart').mouseover(function(e){
        console.log(e.currentTarget.children);
        $(e.currentTarget.children).css('stroke', '#DD4646');
    })
    $('.slider_imageInterier_heart').mouseleave(function(e){
        console.log(e.currentTarget.children);
        $(e.currentTarget.children).css('stroke', 'black');
    })
    $('.slider_imageInterier_heart').click(function(e){
        console.log(e.currentTarget.children);
        $(e.currentTarget.children).css('stroke', '#DD4646');
    })
};