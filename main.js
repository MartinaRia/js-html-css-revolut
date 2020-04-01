$( document ).ready(function() {

  // NAVBAR DESKTOP
  $('.link-links').mouseenter(
    function(){
      $('.sub-menu', this).show();
      $('.sub-menu', this).removeClass('off');
      $('.off').hide();
    }
  ).mouseleave(
    function(){
      $('.sub-menu', this).addClass('off');
    }
  );

  $( document ).click(
    function(){
      $('.sub-menu').hide()
    }
  );

  // NAVBAR MOBILE

  $('.icon-hamburger').click(
    function(){
      $('.menu-mobile').fadeToggle()
    }

  )

  $('.mob-link-links').click(
    function(){
      $('.mob-sub-menu').addClass('off');
      $('.mob-sub-menu', this).addClass('on').removeClass('off');
      $('.on').slideToggle();
      $('.off').hide();
    }
  );





});
