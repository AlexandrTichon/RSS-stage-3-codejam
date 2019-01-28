const h1 = document.querySelector('header > div > a > h1');

const mainNav = document.querySelector('.main-navigation > li > a ');
const poetsNav = document.querySelector('.main-navigation > li:nth-child(2) > a ');
const biography = document.querySelector('.timeline > h3');
const mainWorks = document.querySelector('.works > h3');
const gallery = document.querySelector('.gallery > h3');
const video = document.querySelector('.video > h3');
const birthplace = document.querySelector('.map > h3');

function setPageToEng() {
  document.title = 'Сultural portal of Belarus';
  h1.innerHTML = 'Portal "Culture of Belarus"';
  mainNav.innerHTML = 'Main';
  poetsNav.innerHTML = 'Belorussian Poets';
  biography.innerHTML = 'Biography';
  mainWorks.innerHTML = 'Main writings';
  gallery.innerHTML = 'Photoes';
  video.innerHTML = 'Video';
  birthplace.innerHTML = 'Birthplace';
}

function setPageToBy() {
  document.title = 'Культурны партал Беларусi';
  h1.innerHTML = 'Партал "Культура Беларусi"';
  mainNav.innerHTML = 'Галоўная';
  poetsNav.innerHTML = 'Паэты Беларусi';
  biography.innerHTML = 'Бiяграфiя';
  mainWorks.innerHTML = 'Асноўныя работы';
  gallery.innerHTML = 'Фатаграфii';
  video.innerHTML = 'Вiдэа';
  birthplace.innerHTML = 'Месца нараджэння';
}

function setPageToRu() {
  document.title = 'Культурный портал Беларуси';
  h1.innerHTML = 'Портал "Культура Беларуси"';
  mainNav.innerHTML = 'Главная';
  poetsNav.innerHTML = 'Поэты Беларуси';
  biography.innerHTML = 'Биография';
  mainWorks.innerHTML = 'Основные работы';
  gallery.innerHTML = 'Фотографии';
  video.innerHTML = 'Видео';
  birthplace.innerHTML = 'Место рождения';
}

export default function translatePoetPage() {
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
