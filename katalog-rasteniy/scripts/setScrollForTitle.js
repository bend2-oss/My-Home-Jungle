export default () => {
    $('a.scrollto').click(function(e){
        e.preventDefault();
        const elementHref = $(this).attr("href");
        const titleClass = elementHref.slice(1);
        const currentTitle = $('.rightTitle').filter(`.${ titleClass}`);
        const top = currentTitle.offset().top;
        const headerHeight = $('header').height();
        $('body,html').animate({scrollTop: top - headerHeight - 50}, 500);
    });
};