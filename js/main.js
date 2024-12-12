$(function () {
  /*=================================================
    ハンバーガーメニュー
    ===================================================*/
  $(".toggle-btn,.mask,nav a").on("click", function () {
    // トグルボタンを押した時

    if ($("header").hasClass("open")) {
      // headerにopenクラスがあるか判定

      $("header").removeClass("open");
      // headerにopenクラスがある場合は消す
    } else {
      // そうでなければ

      $("header").addClass("open");
      // headerにopenクラスがない場合は足す
    }
  });
  
  $(window).on("scroll", function(){
    $(".scroll-nav").css("left", -$(window).scrollLeft());
  });
});
