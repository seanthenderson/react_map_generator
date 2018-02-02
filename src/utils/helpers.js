
  const forms = document.querySelectorAll('form');
  const mapSettings = document.querySelector('form.mapSettings');
  const addMarker = document.querySelector('form#addMarker');
  const getCode = document.querySelector('#getCode');
  const menuSection = document.querySelector('.menu-section');
  const menuHeader = document.querySelector('.menu-section-header');
  let initialHeight = 35;
  let settingsHeight= mapSettings.outerHeight;
  let addMarkerHeight= addMarker.outerHeight();
  let getCodeHeight= getCode.outerHeight();
  let settingsCount = 0;
  let addMarkerCount = 0;
  let getCodeCount = 0;

  forms.style.height = initialHeight;
  getCode.style.height = initialHeight;

  document.querySelector('form#mapSettings h2').addEventListener('click', function() {
    if (settingsCount%2===0) {
      this.parentNode.style.height = settingsHeight;
      this.querySelector('.fa').classList.remove('fa-plus-circle')
      this.querySelector('.fa').classList.add('fa-minus-circle');
    } else {
      this.parentNode.style.height = initialHeight;
      this.querySelector('.fa').classList.add('fa-plus-circle')
      this.querySelector('.fa').classList.remove('fa-minus-circle');
    }
    settingsCount++;
  });

  document.querySelector('form#addMarker h2').addEventListener('click', function() {
    if (addMarkerCount%2===0) {
      this.parentNode.style.height = addMarkerHeight;
      this.querySelector('.fa').classList.remove('fa-plus-circle')
      this.querySelector('.fa').classList.add('fa-minus-circle');
    } else {
      this.parentNode.style.height = initialHeight;
      this.querySelector('.fa').classList.add('fa-plus-circle')
      this.querySelector('.fa').classList.remove('fa-minus-circle');
    }
    addMarkerCount++;
  });

  document.querySelector('#getCode h2').addEventListener('click', function() {
    if (getCodeCount%2===0) {
      this.parentNode.style.height = getCodeHeight;
      this.querySelector('.fa').classList.remove('fa-plus-circle')
      this.querySelector('.fa').classList.add('fa-minus-circle');
    } else {
      this.parentNode.style.height = initialHeight;
      this.querySelector('.fa').classList.add('fa-plus-circle')
      this.querySelector('.fa').classList.remove('fa-minus-circle');
    }
    getCodeCount++;
  });
