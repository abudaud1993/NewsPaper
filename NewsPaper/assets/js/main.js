(function($) {

$('#mobile-menu').meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "768",
  });

  // data - background - img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });


   

})(jQuery);

