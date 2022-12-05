let mainNavigationToggle = document.querySelector('.main-navigation__toggle');
let mainNavigation = document.querySelector('.main-navigation');

mainNavigation.classList.remove('main-navigation--active');
mainNavigationToggle.onclick = function () {
  mainNavigation.classList.toggle('main-navigation--active');
}
