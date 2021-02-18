let tab1 = document.querySelector('.movies'),
  tab2 = document.querySelector('.television');
let buttonTab1 = document.querySelector('#button-tab1'),
  buttonTab2 = document.querySelector('#button-tab2');

buttonTab1.onclick = function () {
  tab1.classList.toggle('movies-toggle');
};

buttonTab2.onclick = function () {
  tab2.classList.toggle('television-toggle');
};
