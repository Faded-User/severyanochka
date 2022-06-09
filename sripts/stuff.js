// menu.addEventListener("mouseenter", (e) => {
//   menu.style.border = "5px dotted orange";
// });

// menu.addEventListener("mouseleave", (e) => {
//   menu.style.border = "1px solid #333";
// });

//forEach
// let array = [1, 2, 3];
// array.forEach(multiply10);
// array.forEach(function (element) {
//   console.log("-element-", element);
// });
// function multiply10(number) {
//   return number * 10;
// }
// console.log(multiply10(20));


// forEach
let array = [1, 2, 3, 'div', {}];

// перебор массива
array.forEach(function (element) {
  console.log('- element -', element);
})

// создание (объявление) функции
function multiply10(number) {
  return number * 10;
}

// вызов функции
multiply10(20);