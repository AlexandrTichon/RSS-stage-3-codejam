import dataRu from '../../data/poets-ru.json';
import dataEng from '../../data/poets-eng.json';
import dataBy from '../../data/poets-by.json';

import getDayPoet from '../../getPoetOfTheDay';

const eng = document.getElementById('eng');
const by = document.getElementById('by');
const lang = document.getElementById('lang');

const h1 = document.querySelector('header > div > a > h1');
const h2 = document.querySelector('.project > h2');

const mainNav = document.querySelector('.main-navigation > li > a ');
const poetsNav = document.querySelector('.main-navigation > li:nth-child(2) > a ');

const aboutProject = document.querySelector('.project > p');
const poetOfTheDay = document.querySelector('.label');

const aboutTeamHeader = document.querySelector('.team > h2');
const aboutTeamCont = document.querySelector('.team > p');

const firstMember = document.querySelector('.team-member > figure > figcaption > p');
const secondMember = document.querySelector('.team-member:nth-child(2) > figure > figcaption > p');
const thirdMember = document.querySelector('.team-member:nth-child(3) > figure > figcaption > p');
const fourthMember = document.querySelector('.team-member:nth-child(4) > figure > figcaption > p');

function setPageToEng() {
  getDayPoet(dataEng);
  document.title = 'Сultural portal of Belarus';
  h1.innerHTML = 'Portal "Culture of Belarus"';
  mainNav.innerHTML = 'Main';
  poetsNav.innerHTML = 'Belorussian Poets';
  h2.innerHTML = 'About Portal';
  aboutProject.innerHTML = 'Student project of The Rolling Scopes School recruitment 2018-Q3. Here you will find basic information about the poets of Belarus.';
  poetOfTheDay.innerHTML = 'Poet of the day';
  aboutTeamHeader.innerHTML = 'About Team';
  aboutTeamCont.innerHTML = 'Our group was formed by the great random and consists of four people.';
  firstMember.innerHTML = 'Yuliya Miatlionak';
  secondMember.innerHTML = 'Alexey Novomlinec';
  thirdMember.innerHTML = 'Alexandr Tichon';
  fourthMember.innerHTML = 'Aleksandr Schemelev';
}

function setPageToBy() {
  getDayPoet(dataBy);
  document.title = 'Культурны партал Беларусi';
  h1.innerHTML = 'Партал "Культура Беларусi"';
  mainNav.innerHTML = 'Галоўная';
  poetsNav.innerHTML = 'Паэты Беларусi';
  h2.innerHTML = 'Аб Партале';
  aboutProject.innerHTML = 'Вучэбны праект студэнтаў The Rolling Scopes School набору 2018-Q3. Здесь вы знайдзёце асноўную iнфармацiю а паэтах Беларусi.';
  poetOfTheDay.innerHTML = 'Паэт дня';
  aboutTeamHeader.innerHTML = 'Аб камандзе';
  aboutTeamCont.innerHTML = 'Наша група была сфармiравана вялiкiм рандомам i складаецца за чатырох чалавек.';
  firstMember.innerHTML = 'Юлiя Мятлёнак';
  secondMember.innerHTML = 'Аляксей Навамлынец';
  thirdMember.innerHTML = 'Аляксандр Цiхан';
  fourthMember.innerHTML = 'Аляксандр Шчэмелёў';
}

function setPageToRu() {
  getDayPoet(dataRu);
  document.title = 'Культурный портал Беларуси';
  h1.innerHTML = 'Портал "Культура Беларуси"';
  mainNav.innerHTML = 'Главная';
  poetsNav.innerHTML = 'Поэты Беларуси';
  h2.innerHTML = 'О Портале';
  aboutProject.innerHTML = 'Учебный проект студентов The Rolling Scopes School набора 2018-Q3. Здесь вы найдете основную информацию о поэтах Беларуси.';
  poetOfTheDay.innerHTML = 'Поэт дня';
  aboutTeamHeader.innerHTML = 'О Команде';
  aboutTeamCont.innerHTML = 'Наша группа была сформирована великим рандомом и состоит из четырёх человек.';
  firstMember.innerHTML = 'Юлия Метлёнок';
  secondMember.innerHTML = 'Алексей Новомлинец';
  thirdMember.innerHTML = 'Александр Тихон';
  fourthMember.innerHTML = 'Александр Щемелёв';
}

const selectLang = (e) => {
  console.log(e.target);
  if (e.target === by) {
    localStorage.setItem('lang', 'by');
    setPageToBy();
  } else if (e.target === eng) {
    localStorage.setItem('lang', 'eng');
    setPageToEng();
  } else {
    localStorage.setItem('lang', 'ru');
    setPageToRu();
  }
};

lang.addEventListener('click', selectLang);

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

export default function getLang() {
  const selectedLang = localStorage.getItem('lang');
  return selectedLang;
}
