let more = document.getElementById("more");
let megaMenu = document.getElementById("mega-menu");

document.onclick = function (e) {
  if (e.target.id !== "more" && e.target.id !== "mega-menu") {
    megaMenu.classList.remove("active");
    more.classList.remove("active");
  }
};

more.addEventListener("click", function () {
  megaMenu.classList.toggle("active");
  more.classList.toggle("active");
});

let header = document.getElementById("header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  if (window.scrollY > lastScrollTop) {
    header.style.top = "-100%";
  } else {
    header.style.top = "0px";
  }
  lastScrollTop = window.scrollY;
});
