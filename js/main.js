// JavaScript Document

window.onload = function () {
  var container = document.getElementById("head-container");
  var timer;
  var ml = ["0%", "-100%", "-200%", "-300%", "-400%"]; //存放margin-left的取值
  var index = 0; //当前下标

  function rightSlide() {
    //图片向右切换
    var inb = "sl" + index.toString(); //底部按钮 以sl开头，第index个按钮（当前
    index = (index + 1) % 5; //index+1
    var ind = "sl" + index.toString(); //获得下一个按钮的id
    document.getElementById(inb).style.backgroundColor = "rgba(255,255,255,.9)"; //上一按钮变白
    document.getElementById(ind).style.backgroundColor = "rgba(180,180,180,.9)"; //当前按钮变灰
    $("#pics").animate({ marginLeft: ml[index] }); //图片框的margin-left变为ml数组的下一项
  }
  function leftSlide() {
    //图片向左切换
    var inb = "sl" + index.toString();
    index = (index + 4) % 5;
    var ind = "sl" + index.toString();
    document.getElementById(inb).style.backgroundColor = "rgba(255,255,255,.9)";
    document.getElementById(ind).style.backgroundColor = "rgba(180,180,180,.9)";
    $("#pics").animate({ marginLeft: ml[index] }); //图片框的margin-left变为ml数组的上一项
  }
  function lostLastDot() {
    var inb = "sl" + index.toString();
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
    $("#sl0").click(function () {
      lostLastDot();
      index = 0;
      document.getElementById("sl0").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#pics").animate({ marginLeft: "0%" });
      clearInterval(timer);
    });
    $("#sl1").click(function () {
      lostLastDot();
      index = 1;
      document.getElementById("sl1").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#pics").animate({ marginLeft: "-100%" });
      clearInterval(timer);
    });
    $("#sl2").click(function () {
      lostLastDot();
      index = 2;
      document.getElementById("sl2").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#pics").animate({ marginLeft: "-200%" });
      clearInterval(timer);
    });
    $("#sl3").click(function () {
      lostLastDot();
      index = 3;
      document.getElementById("sl3").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#pics").animate({ marginLeft: "-300%" });
      clearInterval(timer);
    });
    $("#sl4").click(function () {
      lostLastDot();
      index = 4;
      document.getElementById("sl4").style.backgroundColor =
        "rgba(180,180,180,.9)";
      $("#pics").animate({ marginLeft: "-400%" });
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

  container.onmouseover = stop; //鼠标悬浮在图片上停止轮播
  container.onmouseout = play; //鼠标离开就开始轮播

  // var rb = document.getElementById("rig-btn");
  // function hr() {
  //   $("#rig-btn").animate({ paddingRight: "15px" }, 150);
  //   rb.style.color = "white";
  // }
  // function lr() {
  //   $("#rig-btn").animate({ paddingRight: "0" }, 150);
  //   rb.style.color = "rgba(220,220,220,.9)";
  // }
  // rb.onmouseenter = hr;
  // rb.onmouseleave = lr;
  // var lb = document.getElementById("lft-btn");
  // function hl() {
  //   $("#lft-btn").animate({ paddingLeft: "15px" }, 150);
  //   lb.style.color = "white";
  // }
  // function ll() {
  //   $("#lft-btn").animate({ paddingLeft: "0" }, 150);
  //   lb.style.color = "rgba(220,220,220,.9)";
  // }
  // lb.onmouseenter = hl;
  // lb.onmouseleave = ll;

  //play();
  $("#site-left").fadeOut(0);
  $("#fd-left").fadeOut(0);
  $("#Top-button").fadeOut(0);
  document.getElementById("Top-button").style.height = "50px";
};
$(document).ready(function () {
  $("#site-right").click(function () {
    $("#sites").animate({ marginLeft: "-732px" });
    $("#site-right").fadeOut(100);
    $("#site-left").fadeIn(100);
  });
  $("#site-left").click(function () {
    $("#sites").animate({ marginLeft: "0px" });
    $("#site-left").fadeOut(100);
    $("#site-right").fadeIn(100);
  });
  $("#fd-right").click(function () {
    $("#food").animate({ marginLeft: "-520px" });
    $("#fd-right").fadeOut(100);
    $("#fd-left").fadeIn(100);
  });
  $("#fd-left").click(function () {
    $("#food").animate({ marginLeft: "0px" });
    $("#fd-left").fadeOut(100);
    $("#fd-right").fadeIn(100);
  });
});
$(function () {
  var top = 74;
  $(function () {
    //当滚动条的位置处于距顶部74像素以下时，“回到顶部”按钮出现，否则消失
    $(window).scroll(function () {
      if ($(window).scrollTop() > top) {
        $("#Top-button").fadeIn(300);
      } else {
        $("#Top-button").fadeOut(300);
      }
    });

    //当点击悬浮按钮后，回到页面顶部位置
    $("#Top-button").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
    $("#link1").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
    $("#link-sec1").click(function () {
      $("html, body").animate({ scrollTop: $("#sec1").offset().top - top }, 500);
    });
    $("#link-sec2").click(function () {
      $("html, body").animate({ scrollTop: $("#sec2").offset().top - top }, 500);
    });
    $("#link-sec3").click(function () {
      $("html, body").animate({ scrollTop: $("#sec3").offset().top - top }, 500);
    });
    $("#link-sec4").click(function () {
      $("html, body").animate({ scrollTop: $("#sec4").offset().top - top }, 500);
    });
  });
});
