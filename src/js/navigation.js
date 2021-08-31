(function () {
  let toggleOpen = document.querySelector('.js-navigation-open');
  let toggleClose = document.querySelector('.js-navigation-close');
  let navigation = document.querySelector('.js-navigation');
  let navItems = document.querySelectorAll('.js-link');
  let navOpen = false;

  function isNavigationExisting() {
    return toggleOpen && toggleClose && navigation;
  }

  function openNavigation() {
    navigation.classList.remove('hidden');
    navOpen = true;
  }

  function closeNavigation() {
    navigation.classList.add('hidden');
    navOpen = false;
  }

  function addEventListenerToToggleOpen() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      toggleOpen.addEventListener('click', () => {
        if(!navOpen) {
          openNavigation();
        }
      });
    }
  }

  function addEventListenerToLinks() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      for(let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () => {
          if(navOpen) {
            closeNavigation();
          }
        });
      }
    }
  }

  function addEventListenerToToggleClose() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      toggleClose.addEventListener('click', () => {
        if(navOpen) {
          closeNavigation();
        }
      });
    }
  }

  function initMenu() {
    if (!isNavigationExisting()) {
      return;
    }
    addEventListenerToToggleOpen();
    addEventListenerToToggleClose();
    addEventListenerToLinks();
  }

  initMenu();
})();
