// START FOOTER CATEGORY SCRIPT
window.onresize = function () {
  categoryResponsive();
};
window.onload = function () {
  categoryResponsive();
};
let aClickable = document.getElementsByClassName("category__title");
let divCollapse = document.getElementsByClassName("collappseDiv");
let toolCollapse = document.getElementsByClassName("category__tool");
let itemMD = document.getElementsByClassName("category__item--md");

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
    $(toolCollapse).attr("data-toggle", "collapse");
    $(toolCollapse).addClass("collapse");
  } else {
    $(toolCollapse).removeAttr("data-toggle");
    $(toolCollapse).removeClass("collapse");
  }
}
// END FOOTER CATEGORY SCRIPT
