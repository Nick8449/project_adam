 //-------------------------------- HEADER ------------------------------//

const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const siteNavLinks = document.querySelectorAll('.site-nav-link');
const navList = document.querySelector('.site-nav__list');
const backdrop = document.querySelector('.backdrop');
const sideMenu = document.getElementById('side-menu');


burgerButton.addEventListener('click', () => {
    backdrop.classList.remove('is-hidden');
    sideMenu.classList.remove('is-hidden');
    sideMenu.classList.add('visible');
});

closeButton.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
    sideMenu.classList.remove('visible');
    sideMenu.classList.add('is-hidden');

});

backdrop.addEventListener('click', (event) => {

    if(event.target === event.currentTarget){
        backdrop.classList.add('is-hidden');
        sideMenu.classList.add('is-hidden');
        sideMenu.classList.remove('visible')
    }

});

  document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;

  if(screenWidth < 1280 ){
    burgerButton.classList.remove('is-hidden');
    closeButton.classList.remove('is-hidden');
    backdrop.classList.add('is-hidden');
    sideMenu.classList.add('is-hidden');
  }

  if(screenWidth >= 1280 ){
    navList.classList.remove('visible');
    burgerButton.classList.add('is-hidden');
    closeButton.classList.add('is-hidden');
    sideMenu.classList.remove('is-hidden');
    sideMenu.classList.remove('is-hidden');
    backdrop.classList.remove('is-hidden');
  }

  siteNavLinks.forEach(siteNavLink => {

    siteNavLink.removeEventListener('click', addIsHidden);

    if (screenWidth < 1280) {
      siteNavLink.addEventListener('click', addIsHidden);
    }
    if (screenWidth >= 1280){
      siteNavLink.addEventListener('click', removeIsHidden);
    }
  });

  function addIsHidden() {
    backdrop.classList.add('is-hidden');
  }

  function removeIsHidden() {
    backdrop.classList.remove('is-hidden');
  }

}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);


// ****************************************************************************//




//-------------------------------- Privycy Policy ------------------------------//

const infoBtn = document.querySelectorAll('.info-open-btn-id');
const infoCloseBtn = document.querySelectorAll('.info-close-btn-id');
const infoBackdrop = document.querySelectorAll('.info-backdrop-id');

infoBtn.addEventListener('click', () => {
    infoBackdrop.classList.remove('is-hidden');
});

infoCloseBtn.addEventListener('click', () => {
    closeInfoBackdrop();
});

function closeInfoBackdrop() {
  infoBackdrop.classList.add('is-hidden');
}

// ****************************************************************************//

//-------------------------------- Terms of Service ------------------------------//

const termsBtn = document.querySelector('.terms-open-btn');
const termsCloseBtn = document.querySelector('.terms-close-btn');
const termsBackdrop = document.querySelector('.terms-backdrop');

termsBtn.addEventListener('click', () => {
    termsBackdrop.classList.remove('is-hidden');
});

termsCloseBtn.addEventListener('click', () => {
    closetTermsBackdrop();
});

function closetTermsBackdrop() {
  termsBackdrop.classList.add('is-hidden');
}

// ****************************************************************************//
