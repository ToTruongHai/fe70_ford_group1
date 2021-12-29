// START FOOTER CATEGORY SCRIPT
window.onresize = function () {
  categoryResponsive();
};
window.onload = function () {
  categoryResponsive();
};
let aClickable = document.getElementsByClassName("category__title");
let divCollapse = document.getElementsByClassName("collappseDiv");
let itemMD = document.getElementsByClassName("category__item--md");

let toolCollapse = document.getElementsByClassName("category__tool");
let toolTitle = document.getElementsByClassName("category__title-tool");

function categoryResponsive() {
  if ($(document).width() < 1200) {
    $(aClickable).attr("data-toggle", "collapse");
    $(divCollapse).addClass("collapse");
    $(itemMD).removeClass("row");
  } else {
    $(aClickable).removeAttr("data-toggle");
    $(divCollapse).removeClass("collapse");
    $(itemMD).addClass("row");
  }
  if ($(document).width() < 768) {
    $(toolTitle).attr("data-toggle", "collapse");
    $(toolCollapse).addClass("collapse");
  } else {
    $(toolTitle).removeAttr("data-toggle");
    $(toolCollapse).removeClass("collapse");
  }
}
// END FOOTER CATEGORY SCRIPT

// START FIXED-CONTENT SCRIPT
window.onscroll = function () {
  scrollFunction();
};
let upBtn = document.getElementById("upBtn");
let lastScrollTop = 0;
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      upBtn.style.visibility = "hidden";
      upBtn.style.opacity = "0";
    } else {
      upBtn.style.visibility = "visible";
      upBtn.style.opacity = "1";
    }
    lastScrollTop = st;
  }
}
// END FIXED-CONTENT SCRIPT
