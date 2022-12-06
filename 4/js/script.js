let mainNavigationToggle = document.querySelector('.main-navigation__toggle');
let mainNavigation = document.querySelector('.main-navigation');

mainNavigationToggle.style.display = "block";
mainNavigation.style.position = "absolute";
mainNavigation.classList.remove('main-navigation--active');
mainNavigationToggle.onclick = function () {
  mainNavigation.classList.toggle('main-navigation--active');
}
