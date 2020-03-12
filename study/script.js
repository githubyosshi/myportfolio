// クリックされた要素を取得してconsole.logで確認
$(function() {
  var card = $(".card");
  card.on("click", function() {
// 関数の中でthisを使うと、イベントの発生元となった要素を取得
    var img = $(this).find("img");
// 画像の透明度
    img.css("opacity","0.5");
  // console.log(this);
  });
});
