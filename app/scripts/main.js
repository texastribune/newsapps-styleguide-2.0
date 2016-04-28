/* global $ */

$(document).ready(function(){
  // Hide-Show code blocks
  $('.code-block > .button').click(function(){
    $(this).next('pre').toggle();
  });

  $('#menu').click(function() {
    $('#nav-options').toggle();
  });
});
