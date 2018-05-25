$(document).ready(function() {
  var NavY = $('.topNav1').offset().top;

  var stickyNav = function() {
    var scrollY = $(window).scrollTop();

    if (scrollY > NavY) {
      $('.topNav1').addClass('sticky');
    } else {
      $('.topNav1').removeClass('sticky');

    }
  };
  stickyNav();
  //funkcja scrolująca do danej sekcji
  $(window).scroll(function() {
    stickyNav();
  });
});
jQuery(function($) {
  //zresetuj scrolla
  $.scrollTo(0);
  $('#up').click(function() {
    $.scrollTo($('body'), 500);
  });
  $('#menu1').click(function() {
    $.scrollTo($('.Strona_glowna'), 500);
  });
  $('#menu2').click(function() {
    $.scrollTo($('.O_nas'), 500);
  });
  $('#menu3').click(function() {
    $.scrollTo($('.Cennik'), 500);
  });
  $('#menu4').click(function() {
    $.scrollTo($('.Nasze_rowery'), 500);
  });
  $('#menu5').click(function() {
    $.scrollTo($('.Kontakt'), 500);
  });

});
//pokaż podczas przewijania
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) $('#up').fadeIn();
  else $('#up').fadeOut();
});

//--------------------menu responsywne-------------------------
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
$(".center").hover(function(){
      $(this).css({"cursor":"pointer","box-shadow":"0 4px 50px 0 #245F75"});
},
function(){
      $(this).css({"cursor":"normal","box-shadow":"none"});
});

$(".center").click(function(){
  $(this).css("background-color","rgba(255, 255, 255, 0.2)");
})
