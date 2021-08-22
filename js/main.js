$(document).ready(function () {
  var currentFloor = 2; //переменная с текущим этажом
  var floorPath = $(".home-image path"); //каждый отдельный этаж в svg
  var counterUp = $('.counter-up'); /*Кнопка увеличения этажа*/
  var counterDown = $('.counter-down'); /*Кнопка умеьшения этажа*/
  
  // функция при наведении мышкой на этаж на фото
  floorPath.on ("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажа
    currentFloor = $(this).attr("data-floor"); //получаем текущее значение этажа
    $(".counter").text(currentFloor); //записываем текущее значение в счётчик
});

  counterUp.on('click', function () { //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { //проверяем макс. значение этажа, <=18
    currentFloor++; //пробавляем 1 к номеру этажа
    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); //форматируем значение этажа, чтобы у значений <10 впереди был 0
    $(".counter").text(usCurrentFloor); //записываем текущее значение этажа в счётчик
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажа
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
    };
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
    currentFloor--;
    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    };
  })
});
 