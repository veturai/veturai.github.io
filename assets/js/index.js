(function() {
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    // Get browser viewport height
    var browserHeight = $(window).height();

    // Calculate new opacity
    var opacity = 1 - Math.min(scrollTop / (browserHeight / 4), 1)

    $('.content').css({
      opacity: opacity
    });

    if (opacity === 0.0) {
      $('.navbar__logo').css({
        opacity: 1.0
      });
    } else {
      $('.navbar__logo').css({
        opacity: 0.0
      });
    }
  });
})();
