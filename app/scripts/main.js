/* global $ */

$(document).ready(function(){
  // Hide-Show code blocks
  $('.code-block > .button').click(function(){
    $(this).next('pre').toggle();
  });

  $('#menu').click(function() {
    $('#nav-options').toggle();
  });

  if ($(window).width >= 768) {
    console.log('hello');
    $('#nav-options').show();
  }
});

$(window).resize(function() {
  if ($(window).width() >= 768) {
    $('#nav-options').show();
  }
});
