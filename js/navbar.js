"use strict"

$(document).ready(function() {
  $('.menu li first:a').on('mouseover', function() {
    $('.sub-list').slidedown(200);
  });
  $('.menu li first:a').on('mouseout', function() {
    $('.sub-list').slideup(200);
  });
});