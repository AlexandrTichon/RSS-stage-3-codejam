const h1 = document.querySelector('header > div > a > h1');

const mainNav = document.querySelector('.main-navigation > li > a ');
const poetsNav = document.querySelector('.main-navigation > li:nth-child(2) > a ');
const poetName = document.querySelector('.poets-search > label');
const poetBirthPlace = document.querySelector('.poets-search > label:nth-child(2)');
const search = document.querySelector('.search-button');


function setPageToEng() {
  document.title = 'Сultural portal of Belarus';
  h1.innerHTML = 'Portal "Culture of Belarus"';
  mainNav.innerHTML = 'Main';
  poetsNav.innerHTML = 'Belorussian Poets';
  poetName.innerHTML = 'Poet\'s name: <input type="text" id="poet_name">';
  poetBirthPlace.innerHTML = 'Birthplace: <input type="text" id="poet_birthplace">';
  search.innerHTML = 'Search';
}

function setPageToBy() {
  document.title = 'Культурны партал Беларусi';
  h1.innerHTML = 'Партал "Культура Беларусi"';
  mainNav.innerHTML = 'Галоўная';
  poetsNav.innerHTML = 'Паэты Беларусi';
  poetName.innerHTML = 'Iмя паэта <input type="text" id="poet_name">';
  poetBirthPlace.innerHTML = 'Месца нараджэння: <input type="text" id="poet_birthplace">';
  search.innerHTML = 'Поiск';
}

function setPageToRu() {
  document.title = 'Культурный портал Беларуси';
  h1.innerHTML = 'Портал "Культура Беларуси"';
  mainNav.innerHTML = 'Главная';
  poetsNav.innerHTML = 'Поэты Беларуси';
  poetName.innerHTML = 'Имя поэта: <input type="text" id="poet_name">';
  poetBirthPlace.innerHTML = 'Место рождения: <input type="text" id="poet_birthplace">';
  search.innerHTML = 'Поиск';
}


export default function translatePoetsPage() {
  document.addEventListener('DOMContentLoaded', () => {
    const pageLang = localStorage.getItem('lang');

    if (pageLang === 'by') {
      setPageToBy();
    } else if (pageLang === 'eng') {
      setPageToEng();
    } else {
      setPageToRu();
    }
  });
}
