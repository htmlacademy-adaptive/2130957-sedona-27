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

let mapContainer = document.querySelector('.map__container');
let mapIframe = document.createElement('iframe');
mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88105.84786488932!2d-111.87298312538199!3d34.84986566932531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2s!4v1670049332950!5m2!1sru!2s';
mapIframe.loading = 'lazy';
mapIframe.title = 'map';

let ok = false;
window.addEventListener('scroll', function() {
  if (ok === false) {
    ok = true;
    setTimeout(() => {
      mapContainer.append(mapIframe);
      mapContainer.style.backgroundImage = "none";
    }, 500)
  }
});

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
