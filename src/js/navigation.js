(function () {
  let toggle = document.querySelector('.js-navigation-toggle');
  let navigation = document.querySelector('.js-navigation');
  let navOpen = false;

  function isNavigationExisting() {
    return toggle && navigation;
  }

  function openNavigation() {
    navigation.classList.remove('hidden');
    toggle.classList.add('js-navigation-toggle--open');
    navOpen = true;
  }

  function closeNavigation() {
    navigation.classList.add('hidden');
    toggle.classList.remove('js-navigation-toggle--open');
    navOpen = false;
  }

  function toggleNavigation() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      return navOpen ? closeNavigation() : openNavigation();
    } else {
      return;
    }
  }

  function addEventListenerToToggle() {
    toggle.addEventListener('click', () => {
      toggleNavigation();
    });
  }

  function initMenu() {
    if (!isNavigationExisting()) {
      return;
    }
    addEventListenerToToggle();
  }

  initMenu();
})();
