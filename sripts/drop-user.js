// User
let dropmenuUser = document.querySelector(".user-menu-wrapper");
let menuUser = document.querySelector(".user-profile");
// sub
let stayRotate = document.querySelector(".fa-angle-right");
// User ~~~
menuUser.onmouseenter = function () {
    dropmenuUser.classList.add("dropdown-animate2");
    stayRotate.classList.add("stay-rotate");
  };
  menuUser.onmouseleave = function () {
    dropmenuUser.classList.remove("dropdown-animate2");
    stayRotate.classList.remove("stay-rotate");
  };
  
  dropmenuUser.onmouseenter = function () {
    dropmenuUser.classList.add("dropdown-animate2");
    stayRotate.classList.add("stay-rotate");
  };
  dropmenuUser.onmouseleave = function () {
    dropmenuUser.classList.remove("dropdown-animate2");
    stayRotate.classList.remove("stay-rotate");
  };
  