import menuCard from './templates/menu-card.hbs';
import menu from './menu.json';
import './styles.css'; 

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.body;


function themeSwitch(e) {
    if (e.target.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    }
    localStorage.setItem('Theme', body.classList);
    }
    

const themeChanger = document.querySelector('#theme-switch-toggle');
const savedTheme = localStorage.getItem('Theme');
themeChanger.addEventListener('change', themeSwitch);

body.classList.add(savedTheme);

if (savedTheme === Theme.DARK) { 
   themeChanger.checked = true;
}


const menuContainer = document.querySelector('.js-menu');
const menuCards = menuCard(menu);
//console.log(menuCards);
menuContainer.insertAdjacentHTML('beforeend', menuCards);