$(document).ready(function() {
  $(".nav-link").click(function(e) {
    $(".nav-link").removeClass("sidebar-active");
    $(this).addClass("sidebar-active");
    $(this)
      .parents(".show")
      .toggleClass("show");
  });
});
