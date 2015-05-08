'use strict';

var menuPosition = function() {
  var topPos = $('#side-nav').offset().top;
  var headerHeight = $('#styleguide-header').height();

  // if ($(window).scrollTop() > topPos) {
  //   $('#side-nav').css({position: 'fixed', top: '0'});
  // } else {

  // }
  $.when($(window).scrollTop() > topPos).then(function(){
    if ($(window).width() > 600) {
      $('#side-nav').css({position: 'fixed', top: '0'});
    }
  });


};

$(document).ready(function(){
  // Hide-Show code blocks
  $('.code-block > .button').click(function(){
      $(this).next('pre').toggle();
  });

  menuPosition();
});



$(window).scroll(function(){
  menuPosition();
});
