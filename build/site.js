(function () {
  let listItems = document.querySelectorAll('.js-list-item');
  let sublists = document.querySelectorAll('.js-sublist');
  let labels = document.querySelectorAll('.js-list-label');

  function detectRezise() {
    window.addEventListener('resize', function() {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        for (let i = 0; i < sublists.length; i++ ) {
          sublists[i].classList.remove('hidden');
        }
      } else {
        for (let i = 0; i < sublists.length; i++ ) {
          sublists[i].classList.add('hidden');
          labels[i].classList.add('js-list-label--rotate');
        }
      }
    });
  }

  function toggleNavigation(index) {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      sublists[index].classList.toggle('hidden');
      labels[index].classList.toggle('js-list-label--rotate');
    } else {
      return;
    }
  }  

  function addEventListenerToToggle(listItem, index) {
      listItem.addEventListener('click', () => {
      toggleNavigation(index);
    });
  }  

  function hideAllSublists() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      return;
    }
    for (let i = 0; i < sublists.length; i++ ) {
      sublists[i].classList.add('hidden');
      labels[i].classList.add('js-list-label--rotate');
    }
  }  

  function initDropdown() {
    for (let i = 0; i < listItems.length; i++ ) {
      hideAllSublists();
      addEventListenerToToggle(listItems[i], i);
      detectRezise();
    }
  }

  initDropdown();
})();
(function () {
  let navItems = document.querySelectorAll('.js-link');
  
  function initSmoothScrolling() {
    navItems.forEach(trigger => {
      trigger.onclick = function(e) {
        e.preventDefault();
        
        let hash = this.getAttribute('href');
        let target = document.querySelector(hash);
        let headerOffset = 0;
        if(window.matchMedia('(max-width: 1024px)').matches) {
          headerOffset = 75;
        } else {
          headerOffset = 150;
        }
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
      }
    });
  }
  
  initSmoothScrolling();
})();
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
  