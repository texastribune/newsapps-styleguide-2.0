'use strict';

var menuStyles = function() {

  var headHeight = $('.row-wrapper').offset().top;
  var scrollPos = $(window).scrollTop();

  if ($(window).width() > 850) {
    $('#side-nav').css({display: 'block'});

    if ($(window).height() > headHeight) {
      $('#side-nav').addClass('fix');
      $('.newsapps-logo').addClass('shift');
      $('.main').addClass('shift');
    }

  } else {
      $('#side-nav').removeClass('fix');
      $('#side-nav').css({display: 'none'});
      $('.newsapps-logo').removeClass('shift');
      $('.main').removeClass('shift');
  }

};

$(document).ready(function(){
  // Hide-Show code blocks
  $('.code-block > .button').click(function(){
    $(this).next('pre').toggle();
  });

  $('#menu').click(function() {
    $('#side-nav').toggle();
  });

  menuStyles();
});

$(window).resize(function() {
  menuStyles();
});

$(window).scroll(function () {
  menuStyles();
});
