let mainNavigationToggle = document.querySelector('.main-navigation__toggle');
let mainNavigation = document.querySelector('.main-navigation');
let mainHeaderLogo = document.querySelector('.main-header__logo');
let mainHeader = document.querySelector('.main-header');
let likes = document.querySelectorAll('.photo__item-likes');
let success = document.querySelector('.success');
let buttonSuccess = document.querySelector('#success-button');
let submit = document.querySelector('#submit');
let form = document.querySelector('.form__container');
let error = document.querySelector('.error');
let buttonError = document.querySelector('#error-button');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let phoneNumber = document.querySelector('#phone-number');
let email = document.querySelector('#email');

mainHeader.style.minHeight = "56px";
mainHeaderLogo.style.top = "0";
mainNavigationToggle.style.display = "block";
mainNavigation.classList.remove('main-navigation--active');
mainNavigationToggle.onclick = function () {
  mainNavigation.classList.toggle('main-navigation--active');
};
for (let like of likes) {
  like.onclick = function () {
    if (like.classList.contains('photo__item-likes--added')) {
      like.textContent--;
    } else {
      like.textContent++;
    }
    like.classList.toggle('photo__item-likes--added');
  };
}

buttonSuccess.onclick = function () {
  success.classList.remove('success--active');
}

buttonError.onclick = function () {
  error.classList.remove('error--active');
}


form.onsubmit = function (evt) {
  evt.preventDefault();
  if (firstName.value === "" || lastName.value === "" || phoneNumber.value === "" || email.value === "") {
    error.classList.add('error--active');
    return false;
  } else {
    success.classList.add('success--active');
    return true;
  }
}
