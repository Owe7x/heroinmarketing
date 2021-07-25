$(document).ready(function() {
    $(".menuToggle").click(function() {
    $('.header-main__h1').toggleClass("removepos");
    $('.header-main__img').toggleClass("removepos");
      $(this).toggleClass("active");
      $('.menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });