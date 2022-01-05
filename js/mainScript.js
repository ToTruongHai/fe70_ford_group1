// VIEW ALL
let viewAll = document.querySelectorAll(".toggle");
for (let i = 0; i < viewAll.length; i++) {
  viewAll[i].addEventListener("click", function () {
    viewAll[i].parentNode.classList.toggle("active");
  });
}
//END VIEW-ALL

// START HIDE HEADER ON SCOLL DOWN AND SHOW ON SCOLL UP
(function () {
  var doc = document.documentElement;
  var w = window;

  var curScroll;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = 0;
  var prevDirection = 0;

  var header = document.getElementById("site-header");
  var toggled;
  var threshold = 200;

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  var toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add("hide");
    } else if (curDirection === 1) {
      header.classList.remove("hide");
    } else {
      toggled = false;
    }
    return toggled;
  };

  window.addEventListener("scroll", checkScroll);
})();
// END HIDE AND SHOW HEADER ON SCOLL

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

// khoa-sudo
let newsCollapse = document.getElementById("collapseNews");
let newsViewAllCollapseBtn = document.getElementById("newsViewAllCollapseBtn");
// khoa-sudo

function categoryResponsive() {
  let screenWidth = $(document).width() + 17;
  if (screenWidth < 1200) {
    $(aClickable).attr("data-toggle", "collapse");
    $(divCollapse).addClass("collapse");
    $(itemMD).removeClass("row");
  } else {
    $(aClickable).removeAttr("data-toggle");
    $(divCollapse).removeClass("collapse");
    $(itemMD).addClass("row");
  }
  if (screenWidth < 768) {
    $(toolTitle).attr("data-toggle", "collapse");
    $(toolCollapse).addClass("collapse");

    // khoa-sudo
    $(newsViewAllCollapseBtn).attr("data-toggle", "collapse");
    $(newsCollapse).addClass("collapse");
    // khoa-sudo
  } else {
    $(toolTitle).removeAttr("data-toggle");
    $(toolCollapse).removeClass("collapse");

    // khoa-sudo
    $(newsViewAllCollapseBtn).removeAttr("data-toggle", "collapse");
    $(newsCollapse).removeClass("collapse");
    // khoa-sudo
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
  } else {
    upBtn.style.visibility = "hidden";
    upBtn.style.opacity = "0";
  }
}
// END FIXED-CONTENT SCRIPT
