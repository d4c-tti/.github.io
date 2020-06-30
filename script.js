$(function() {

  $('.modal-show-login').click(function(){
    $('#modal-wrapper').fadeIn();
  });

  $('.modal-show-signin').click(function(){
    $('#modal-wrapper-sign').fadeIn();
  });

  $('.modal-close').click(function(){
    $('#modal-wrapper').fadeOut();
    $('#modal-wrapper-sign').fadeOut();
  });

  $('#page-top').click(function(){
    $('html,body').animate({
      'scrollTop':0
    }, 'slow');
  });

  $('.btn-lesson').click(function(){
    var id = $(this).attr('href');
    var positon = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':positon
    }, 'slow');
  });

  $('.sp-menu').click(function(){
    if($('#sp-btn').hasClass('open')){
      $('#sp-btn').removeClass('open');
      $('#sp-btn').slideUp();
    } else {
      $('#sp-btn').addClass('open');
      $('#sp-btn').slideDown();
    }

  });



});
