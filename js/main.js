$(document).ready(function () {
  $("#phoneIcon").click(function () {
    $(".links").toggle(function () {
      $(".links ul").css({
        display: "flex",
        "flex-direction": "column",
        gap: "30px",
        position: "absolute",
        left: "0",
        top: "54px",
        "background-color": "var(--main-color)",
        width: "100%",
        padding: "20px",
        border: "2px dashed white",
      });
      $(".links ul li").css({
        "text-align": "center",
        width: "80%",
        "padding-bottom": "5px",
        "border-bottom": "2px solid white",
      });
      $(".links ul li a").css("color", "white");
    });
    // if ($(".links").css("display", "none")) {
    //   $(".links").css("display", "flex");
    // } else if ($(".links").css("display", "flex")) {
    //   $(".links").css("display", "none");
    // }
  });
});
