$(document).ready(function() {
  //hiding every .main-section except 1st section
  $(".main>.main-section").hide();
  $(".main>.main-section#Hello_World").fadeIn().show();

  //adding sidbar indicator on current link
  $(".nav-link").click(function(e) {
    $(".nav-link").removeClass("sidebar-active");
    $(this).addClass("sidebar-active");
    $(this)
      .parents(".show")
      .toggleClass("show");

    //showing only the current section
    let redirectLink = $(this).attr("href");
    $(".main>.main-section").hide();
    $(".main")
      .find(redirectLink).fadeIn()
      .show();
  });
});
