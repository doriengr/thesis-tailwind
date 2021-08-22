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
        }
      }
    });
  }

  function toggleNavigation(index) {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      sublists[index].classList.toggle('hidden');
      labels[index].classList.toggle('products__list-label--rotate');
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
      labels[i].classList.add('products__list-label--rotate');
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