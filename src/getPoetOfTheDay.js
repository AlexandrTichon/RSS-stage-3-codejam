const rand = Math.floor(Math.random() * 5);

const photo = document.querySelector('aside > figure > img');
const name = document.querySelector('aside > figure > figcaption');

export default function getDayPoet(data) {
  photo.setAttribute('src', `${data[rand].photo}`);
  name.innerHTML = (`${data[rand].name.split('(')[0]}`);
}

// function setPageToEng() {
//   getPoetOfTheDay(dataEng);
// }

// function setPageToBy() {
//   getPoetOfTheDay(dataBy);
// }

// function setPageToRu() {
//   getPoetOfTheDay(dataRu);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const pageLang = localStorage.getItem('lang');

//   if (pageLang === 'by') {
//     setPageToBy();
//   } else if (pageLang === 'eng') {
//     setPageToEng();
//   } else {
//     setPageToRu();
//   }
// });
