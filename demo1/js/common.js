/**
 * 途中からスライドダウンするグローバルナビの動きを設定する
 */
$(function() {
  var mediaQueryList = window.matchMedia('(min-width: 800px)');
  // 初回
  if (mediaQueryList.matches) {
    $('#foo').css('border-width', '20px');
  } else {
    $('#foo').css('border-width', '1px');
  }
  // リサイズ時
  mediaQueryList.addListener(function(mql) {
    if (mql.matches) {
      $('#foo').css('border-width', '20px');
    } else {
      $('#foo').css('border-width', '1px');
    }
  });
});