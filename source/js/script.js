let mainNavigationToggle = document.querySelector('.main-navigation__toggle');
let mainNavigation = document.querySelector('.main-navigation');

mainNavigationToggle.onclick = function () {
  mainNavigation.classList.toggle('main-navigation--active');
}
