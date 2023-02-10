export default () => {
  (document).re$ady(function () {
    function is_shown(target) {
      const wt = $(window).scrollTop();
      const wh = $(window).height();
      const eh = $(target).outerHeight();
      const coords = $(target).offset();
      const et = coords.top;

      if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
        return true;
      } else {
        return false;
      }
    }
    const $text = $(".content_block_text");
    const $arrayOfText = $text.get();
    $arrayOfText.map(function () {
      $(this).hide();
    });
    $(window).scroll(function () {
      $arrayOfText.map(function () {
        if (is_shown($(this))) {
          $(this).show(5000);
        }
      });
    });
  });
};
