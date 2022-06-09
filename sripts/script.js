let input = document.querySelector(".input");
let icon = document.querySelector(".fa-magnifying-glass");
// Catalog
let drop = document.querySelector("#drop");
let menu = document.querySelector("#menu");

icon.onclick = function () {
  if (input.classList.contains("hidden")) {
    input.classList.remove("hidden");
  } else {
    input.classList.add("hidden");
  }
};
input.onblur = function () {
  input.classList.add("hidden");
};
// Catalog ~~~
menu.onmouseenter = function () {
  drop.classList.add("dropdown-animate");
};
menu.onmouseleave = function () {
  drop.classList.remove("dropdown-animate");
};

drop.onmouseenter = function () {
  drop.classList.add("dropdown-animate");
};
drop.onmouseleave = function () {
  drop.classList.remove("dropdown-animate");
};
