$(document).ready(function () {
  // search animation
  $("#search-button").click(function () {
    if ($(window).width() > 991) {
      $("#input-field").animate({ opacity: "toggle", width: "toggle" }, 350);
    }
  });
  if ($(window).width() < 991) {
    $("#input-field").show();
  }

  // modal
  $("#open-login-modal").click(function () {
    $("#signup-modal").modal("hide");
    $("#login-modal").modal("show");
  });
  $("#open-signup-modal-2").click(function () {
    $("#login-modal").modal("hide");
    $("#signup-modal").modal("show");
  });
  // show password
  $(".show-password").on("click", function () {
    if ($(this).siblings("input").attr("type") === "password") {
      $(this).siblings("input").prop("type", "text");
      $(this).prop("src", "/assets/images/icons/eye-close.svg");
    } else {
      $(this).siblings("input").prop("type", "password");
      $(this).prop("src", "/assets/images/icons/password.svg");
    }
  });
  // scrolltotop
  if ($(this).scrollTop() > 350) {
    $(".scrollToTop").fadeIn();
  } else {
    $(".scrollToTop").fadeOut();
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  // dropdown animate
  $(".dropdown").on("show.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
  });

  $(".dropdown").on("hide.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
  });
  // close share-section
  $("#close-share-modal").click(function () {
    console.log("hi there");
    $("#exampleModal").modal("hide");
  });
});
// resizing
$(window).on("resize", function () {
  if ($(window).width() > 991) {
    $("#input-field").hide();
  } else {
    $("#input-field").show();
  }
});
