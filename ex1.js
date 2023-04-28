function agreeCookies(question) {
  if (confirm(question)) console.log("Вы приняли соглашение о Cookies");
  else console.log("Вы отказались от использования Cookie");
}

agreeCookies("Наш сайт использует cookies. Нам нужно ваше согласие"); // эту можно как до так и после вставлять в код. Но если ф-я будет через let, то ДО работать не будет

let age = prompt("Сколько вам лет ?", 18);

/* let setAccess = null;

if (age < 18) {
  setAccess = function () {
    console.log("Доступ запрещен");
  };
} else {
  setAccess = function () {
    console.log("Доступ разрешен");
  };
}

setAccess(); */

// можно через тернарный оператор записать

let setAccess =
  age < 18
    ? function () {
        console.log("Доступ запрещен");
      }
    : function () {
        console.log("Доступ разрешен");
      };

setAccess();
