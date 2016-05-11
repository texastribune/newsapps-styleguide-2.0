/* global $ */

$(document).ready(function () {
  var $navOptions = $('#nav-options');
  var $windowWidth = $(window).width();

  // Hide-Show code blocks
  $('.code-block > .button').click(function(){
    $(this).next('pre').toggle();
  });

  $('#menu').click(function () {
    $navOptions.toggle();
  });

  if ($windowWidth >= 768) {
    console.log('hello');
    $navOptions.show();
  }
});

$(window).resize(function () {
  if ($windowWidth >= 768) {
    $navOptions.show();
  }
});
