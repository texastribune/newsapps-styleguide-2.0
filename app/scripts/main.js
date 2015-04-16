'use strict';

$(document).ready(function(){

  // Hide-Show code blocks
  $('.code-block > .button').click(function(){
      $(this).next('pre').toggle();
  });
});
