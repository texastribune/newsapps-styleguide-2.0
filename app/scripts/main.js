'use strict';

var menuStyles = function() {

  var headHeight = $('.row-wrapper').offset().top;
  var scrollPos = $(window).scrollTop();

  if ($(window).width() > 850) {
    $('#side-nav').css({display: 'block'});

    if ($(window).height() !== 0 && scrollPos >= 0 && scrollPos < headHeight) {
      $('#side-nav').css({top: (headHeight - scrollPos)});
    } else {
      $('#side-nav').css({top: '0px'}).addClass('fix');
      $('.newsapps-logo').addClass('shift');
      $('.main').addClass('shift');
    }

  } else {
      $('#side-nav').removeAttr('top').removeClass('fix');
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
