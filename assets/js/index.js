(function() {
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    // Get browser viewport height
    var browserHeight = $(window).height();

    // Calculate new opacity
    var opacity = 1 - Math.min(scrollTop / (browserHeight / 4), 1);

    $('.home__brand-wrapper').css({
      opacity: opacity
    });

    $('.icon-scroll').css({
      opacity: opacity
    });

    var navbar = $('.navbar');
    var navbarLogo = $('.navbar__logo');

    if (opacity === 0.0) {
      navbarLogo.css({
        opacity: 1.0
      });
      navbar.css({
        'background-color': 'rgba(255,255,255,0.75)'
      });
    } else {
      navbarLogo.css({
        opacity: 0.0
      });
      navbar.css({
        'background-color': 'transparent'
      });
    }
  });

  var generateMenuClicks = function() {
    $(".section-home").click(function (){
      $('html, body').animate({
        scrollTop: $(".home").offset().top
      }, 500);
    });
    $(".section-company").click(function (){
      $('html, body').animate({
        scrollTop: $(".company").offset().top
      }, 500);
    });
    $(".section-services").click(function (){
      $('html, body').animate({
        scrollTop: $(".services").offset().top
      }, 500);
    });
  };

  var generateFooterEmail = function() {
    var contact = ['m','o','c','.','i','a','r','u','t','e','v','@','t','c','a','t','n','o','c'];
    $('.footer__email').html(contact.reverse().join(''))
  };

  $(document).ready(function (){
    generateMenuClicks();
    generateFooterEmail();
  });
})();
