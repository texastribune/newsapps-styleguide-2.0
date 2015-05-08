'use strict';

$(document).ready(function(){
  // Hide-Show code blocks
  $('.code-block > .button').click(function(){
    $(this).next('pre').toggle();
  });

  $('#menu').click(function() {
    $('#side-nav').toggle();
  });
});

$(window).resize(function() {
  if ($(window).width() > 850) {
    $('#side-nav').css({display: 'block'});
  } else {
    $('#side-nav').css({display: 'none'});
  };
});
