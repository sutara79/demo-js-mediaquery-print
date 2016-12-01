/**
 * 枠線を太くする
 */
$(function() {
  var beforePrint = function() {
    $('#foo').css('border-width', '20px');
  };
  var afterPrint = function() {
    $('#foo').css('border-width', '');
  };
  if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        beforePrint();
      } else {
        afterPrint();
      }
    });
  }
  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
});