// JavaScript Document

window.onload = function () {
  var container = document.getElementById("header-img-container");
  var timer;
  var ml = ["0%", "-100%", "-200%", "-300%", "-400%"]; // array of `margin-left`
  var index = 0; // curr index

  function rightSlide() {
    // img right shift
    var inb = "header-img-dot" + index.toString(); // bottom buttons, start with "header-img-dot"，append `index`
    index = (index + 1) % 5; //index+1
    var ind = "header-img-dot" + index.toString(); // get id of next button
    document.getElementById(inb).style.backgroundColor = "rgba(255,255,255,.9)"; // last button turns white
    document.getElementById(ind).style.backgroundColor = "rgba(180,180,180,.9)"; // curr button turns gray
    $("#header-imgs").animate({ marginLeft: ml[index] }); // set the `margin-left` of img frame to the next item of `ml` array
  }
  function leftSlide() {
    // img left shift
    var inb = "header-img-dot" + index.toString();
    index = (index + 4) % 5;
    var ind = "header-img-dot" + index.toString();
    document.getElementById(inb).style.backgroundColor = "rgba(255,255,255,.9)";
    document.getElementById(ind).style.backgroundColor = "rgba(180,180,180,.9)";
    $("#header-imgs").animate({ marginLeft: ml[index] }); // set the `margin-left` of img frame to the last item of `ml` array
  }
  function lostLastDot() {
    var inb = "header-img-dot" + index.toString();
    document.getElementById(inb).style.backgroundColor = "rgba(255,255,255,.9)";
  }

  $(document).ready(function () {
    // $("#rig-btn").click(function () {
    //   rightSlide();
    //   clearInterval(timer);
    // });
    // $("#lft-btn").click(function () {
    //   leftSlide();
    //   clearInterval(timer);
    // });
    $("#header-img-dot0").click(function () {
      lostLastDot();
      index = 0;
      document.getElementById("header-img-dot0").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#header-imgs").animate({ marginLeft: "0%" });
      clearInterval(timer);
    });
    $("#header-img-dot1").click(function () {
      lostLastDot();
      index = 1;
      document.getElementById("header-img-dot1").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#header-imgs").animate({ marginLeft: "-100%" });
      clearInterval(timer);
    });
    $("#header-img-dot2").click(function () {
      lostLastDot();
      index = 2;
      document.getElementById("header-img-dot2").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#header-imgs").animate({ marginLeft: "-200%" });
      clearInterval(timer);
    });
    $("#header-img-dot3").click(function () {
      lostLastDot();
      index = 3;
      document.getElementById("header-img-dot3").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#header-imgs").animate({ marginLeft: "-300%" });
      clearInterval(timer);
    });
    $("#header-img-dot4").click(function () {
      lostLastDot();
      index = 4;
      document.getElementById("header-img-dot4").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#header-imgs").animate({ marginLeft: "-400%" });
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
  $("#site-left").fadeOut(0);
  $("#fd-left").fadeOut(0);
  $("#Top-button").fadeOut(0);
  document.getElementById("Top-button").style.height = "50px";
};

// gallery
// $(document).ready(function () {
//   $("#site-right").click(function () {
//     $("#sites").animate({ marginLeft: "-732px" });
//     $("#site-right").fadeOut(100);
//     $("#site-left").fadeIn(100);
//   });
//   $("#site-left").click(function () {
//     $("#sites").animate({ marginLeft: "0px" });
//     $("#site-left").fadeOut(100);
//     $("#site-right").fadeIn(100);
//   });
//   $("#fd-right").click(function () {
//     $("#food").animate({ marginLeft: "-520px" });
//     $("#fd-right").fadeOut(100);
//     $("#fd-left").fadeIn(100);
//   });
//   $("#fd-left").click(function () {
//     $("#food").animate({ marginLeft: "0px" });
//     $("#fd-left").fadeOut(100);
//     $("#fd-right").fadeIn(100);
//   });
// });

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
