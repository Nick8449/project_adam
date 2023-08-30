 //-------------------------------- HEADER ------------------------------//

const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const siteNavLinks = document.querySelectorAll('.site-nav-link');
const navList = document.querySelector('.site-nav__list');
const backdrop = document.querySelector('.backdrop');


burgerButton.addEventListener('click', () => {
    backdrop.classList.remove('visually-hidden');
});

closeButton.addEventListener('click', () => {
    backdrop.classList.add('visually-hidden');
});

siteNavLinks.forEach(siteNavLink => {
    siteNavLink.addEventListener('click', () => {
        console.log(siteNavLink);
        backdrop.classList.add('visually-hidden');
    });
});

backdrop.addEventListener('click', (event) => {

    if(event.target === event.currentTarget){
        backdrop.classList.add('visually-hidden');
    }

});

function handleScreenWidthChange() {
  const screenWidth = window.innerWidth;
  if(screenWidth >= 1280 ){
    navList.classList.remove('visible');
    burgerButton.classList.add('visually-hidden');
    closeButton.classList.add('visually-hidden');
    backdrop.classList.remove('visually-hidden');
  }

  if(screenWidth < 1280 ){
    burgerButton.classList.remove('visually-hidden');
    closeButton.classList.remove('visually-hidden');
    backdrop.classList.add('visually-hidden');
  }

}

handleScreenWidthChange();

window.addEventListener('resize', handleScreenWidthChange);

// ****************************************************************************//