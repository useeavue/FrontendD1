let tab1 = document.querySelector('.movies'),
  tab2 = document.querySelector('.television'),
  loginForm = document.querySelector('.login-form'),
  loginButton = document.querySelector('.login-button'),
  closeButton = document.querySelector('.login-close-btn'),
  buttonTab1 = document.querySelector('#button-tab1'),
  buttonTab2 = document.querySelector('#button-tab2');

loginButton.onclick = () => {
  loginForm.classList.remove('login-form-off');
};

closeButton.onclick = () => {
  loginForm.classList.add('login-form-off');
};

buttonTab2.onclick = () => {
  tab1.classList.add('movies-toggle');
  tab2.classList.add('television-toggle');
  buttonTab1.classList.remove('button-tab1_style');
  buttonTab2.classList.add('button-tab2_style');
};

buttonTab1.onclick = () => {
  tab1.classList.remove('movies-toggle');
  tab2.classList.remove('television-toggle');
  buttonTab1.classList.add('button-tab1_style');
  buttonTab2.classList.remove('button-tab2_style');
};
