import data from './data/poets-ru.json';

document.addEventListener('DOMContentLoaded', () => {
  const rand = Math.floor(Math.random() * 5);

  const photo = document.querySelector('aside > figure > img');
  const name = document.querySelector('aside > figure > figcaption');

  photo.setAttribute('src', `${data[rand].photo}`);
  name.innerHTML = (`${data[rand].name.split('(')[0]}`);
});
