$(function () {
  $(".mavic").hover(
    function () {
      $("mavic-img").addClass("mavic-on").removeClass("mavic-off");
    },
    function () {
      $(".mavic-img").removeClass("mavic-on").addClass("mavic-off");
    }
  );
});
