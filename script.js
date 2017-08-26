$(document).ready(function() {
  $blow = $(".girl .mouth .blow");
  $grin = $(".girl .mouth .teeth");
  $song = $("#birthday_song");
  setTimeout(function() {
    $(".boy").css({ top: "-10px" });
    setTimeout(function() {
      $blow.css({
        visibility: "visible"
      });
      setTimeout(function() {
        $blow.css({
          visibility: "hidden"
        });

        $grin.css({
          visibility: "visible"
        });

        $(".lit").addClass("off");

        $(".girl").addClass("dance");
        $(".boy").addClass("dance");
        var x = document.getElementById("birthday_song");
        x.play();
        x.onended = function() {
          $(".girl").removeClass("dance");
          $(".boy").removeClass("dance");
        };
      }, 100);
    }, 4000);
  }, 3000);
});
