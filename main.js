$( document ).ready(function() {

  $('.sub-menu').hide();


  $('.link-links').mouseenter(
    function(){
      $('.sub-menu', this).show();
      $('.sub-menu', this).removeClass('off');
      $('.off').hide()
    }
  ).mouseleave(
    function(){
      $('.sub-menu', this).addClass('off');
    }
  )

  $( document ).click(
    function(){
      $('.sub-menu').hide()
    }
  )





});
