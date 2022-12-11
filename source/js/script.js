let mainNavigationToggle = document.querySelector('.main-navigation__toggle');
let mainNavigation = document.querySelector('.main-navigation');
let mainHeaderLogo = document.querySelector('.main-header__logo');
let mainHeader = document.querySelector('.main-header');
let likes = document.querySelectorAll('.photo__item-likes');

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