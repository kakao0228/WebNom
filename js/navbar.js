"use strict"

$(document).ready(function() {
  $("ul.menu > li").on('mouseover', function(){
    $(this).find('a').addClass('hover');
    $(this).find('ul.sub-list').show();
  }).on('mouseout',function(){
    $(this).find('a').removeClass('hover');
    $(this).find('ul.sub-list').hide();
  });
});