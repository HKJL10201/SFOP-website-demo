// JavaScript Document

window.onload = function () {
  var container = document.getElementById("header-img-container");
  var timer;
  var ml = ["0%", "-100%", "-200%", "-300%", "-400%"]; // array of `margin-left`
  var index = 0; // curr index

  function rightSlide() {
    // img right shift
    index = (index + 1) % 5; //index+1
    $("#header-imgs").animate({ marginLeft: ml[index] }); // set the `margin-left` of img frame to the next item of `ml` array
  }
  function leftSlide() {
    // img left shift
    index = (index + 4) % 5;
    $("#header-imgs").animate({ marginLeft: ml[index] }); // set the `margin-left` of img frame to the last item of `ml` array
  }

  $(document).ready(function () {
    $("#header-img-right-button").click(function () {
      rightSlide();
      clearInterval(timer);
    });
    $("#header-img-left-button").click(function () {
      leftSlide();
      clearInterval(timer);
    });
  });

  function play() {
    timer = setInterval(function () {
      rightSlide();
    }, 5000);
  }
  function stop() {
    clearInterval(timer);
  }

  container.onmouseover = stop; // stop shifting if mouse hover
  container.onmouseout = play; // start shifting if mouse leave

  //play();
  $("#Top-button").fadeOut(0);
  document.getElementById("Top-button").style.height = "50px";
};

// Top button and navigator
$(function () {
  var top = 74;
  $(function () {
    // show Top button if scroll down 74 pixels
    $(window).scroll(function () {
      if ($(window).scrollTop() > top) {
        $("#Top-button").fadeIn(300);
      } else {
        $("#Top-button").fadeOut(300);
      }
    });

    // Top button and navigator click
    $("#Top-button").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
    $("#header-link1").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
    $("#header-link2").click(function () {
      $("html, body").animate({ scrollTop: $("#intro").offset().top - top }, 500);
    });
    $("#header-link3").click(function () {
      $("html, body").animate({ scrollTop: $("#programs-div").offset().top - top }, 500);
    });
    $("#link-sec2").click(function () {
      $("html, body").animate({ scrollTop: $("#sec2").offset().top - top }, 500);
    });
    $("#link-sec3").click(function () {
      $("html, body").animate({ scrollTop: $("#sec3").offset().top - top }, 500);
    });
    $("#header-link4").click(function () {
      $("html, body").animate({ scrollTop: $("#contact-div").offset().top - top }, 500);
    });
  });
});
