"use strict"

function hovermenu() {
  $('.hovermenu').mouseover(function() {
    $('.hovermeun').find('.invisible').addclass('visible')
    $('.hovermeun').find('.invisible').removeclass('invisible');
  });
  $('.hovermenu').mouseout(function() {
    $('.hovermeun').find('.invisible').addclass('visible')
    $('.hovermeun').find('.invisible').removeclass('invisible');
  });
}