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
    firstName.classList.add('form__input--required');
    lastName.classList.add('form__input--required');
    phoneNumber.classList.add('form__input--required');
    email.classList.add('form__input--required');
    return false;
  } else {
    success.classList.add('success--active');
    return true;
  }
}
