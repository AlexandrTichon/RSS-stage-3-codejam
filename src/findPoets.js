import savePoet from './components/templateGenerator/saveSelectedPoet';
import getLang from './components/templateGenerator/getPageLang';
import dataRu from './data/poets-ru.json';
import dataEng from './data/poets-eng.json';
import dataBy from './data/poets-by.json';
import translatePoetsPage from './components/translate/translatePoets';

translatePoetsPage();
const data = getLang(dataBy, dataEng, dataRu);

function warning() {
  const lang = localStorage.getItem('lang');
  let str = '';

  if (lang === 'by') {
    str = 'Па Вашаму запыту нiчога не знойдзена!';
  } else if (lang === 'eng') {
    str = 'Nothing found on your request!';
  } else {
    str = 'По Вашему запросу ничего не найдено!';
  }
  return str;
}

function getDOMPoets() {
  const poetItems = document.createElement('div');
  poetItems.id = 'poet_items';
  poetItems.className = 'poet-items';
  data.forEach((item) => {
    const poetItem = document.createElement('div');
    poetItem.id = `poet-item-${item.id}`;
    poetItem.className = 'poet-item';
    poetItem.innerHTML = `
      <a href="./poet.html" target="_blank" data-poet="${item.name}">
        <figure>
          <p><img src=${item.photo} alt=${item.name} /></p>
          <figcaption>${item.name}</figcaption>
        </figure>
      </a>`;
    poetItem.querySelector('a[href]').addEventListener('click', savePoet);
    poetItems.appendChild(poetItem);
  });
  if (document.getElementById('poets')) {
    document.getElementById('poets')
      .appendChild(poetItems);
  }
}

function getSearchPoets() {
  const inputName = document.getElementById('poet_name')
    .value
    .toLowerCase();
  const inputBirthplace = document.getElementById('poet_birthplace')
    .value
    .toLowerCase();
  let searchItems;
  if (!document.getElementById('search_items')) {
    searchItems = document.createElement('div');
    searchItems.id = 'search_items';
    searchItems.className = 'search-items';
  } else {
    searchItems = document.getElementById('search_items');
    searchItems.innerHTML = '';
  }

  if (!inputName && !inputBirthplace) {
    document.getElementById('poet_items')
      .style.display = 'flex';
  }

  if (inputName && !inputBirthplace) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.name
      .toLowerCase()
      .search(inputName) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = warning();
      document.getElementById('poets')
        .appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.innerHTML = `
        <a href="./poet.html" target="_blank" data-poet="${item.name}">
          <figure>
            <p><img src=${item.photo} alt=${item.name} /></p>
            <figcaption>${item.name}</figcaption>
          </figure>
        </a>`;
        searchItem.querySelector('a[href]').addEventListener('click', savePoet);
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets')
        .appendChild(searchItems);
    }
  }

  if (!inputName && inputBirthplace) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.birthplace
      .toLowerCase()
      .search(inputBirthplace) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = warning();
      document.getElementById('poets')
        .appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.innerHTML = `
          <a href="./poet.html" target="_blank" data-poet="${item.name}">
            <figure>
              <p><img src=${item.photo} alt=${item.name} /></p>
              <figcaption>${item.name}</figcaption>
            </figure>
          </a>`;
        searchItem.querySelector('a[href]').addEventListener('click', savePoet);
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets')
        .appendChild(searchItems);
    }
  }

  if (inputName && inputBirthplace) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.name
      .toLowerCase()
      .search(inputName) + 1
      && item.birthplace
        .toLowerCase()
        .search(inputBirthplace) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = warning();
      document.getElementById('poets')
        .appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.innerHTML = `
          <a href="./poet.html" target="_blank" data-poet="${item.name}">
            <figure>
              <p><img src=${item.photo} alt=${item.name} /></p>
              <figcaption>${item.name}</figcaption>
            </figure>
          </a>`;
        searchItem.querySelector('a[href]').addEventListener('click', savePoet);
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets')
        .appendChild(searchItems);
    }
  }
}

const Key = (e) => {
  if (e.keyCode === 13) getSearchPoets();
};

function addEventList() {
  document.addEventListener('DOMContentLoaded', getDOMPoets);
  if (document.getElementById('search_button')) {
    document.getElementById('search_button')
      .addEventListener('click', getSearchPoets);
    document.addEventListener('keydown', Key);
  }
}

export default function getIdPoets() {
  const arrIndex = [];
  data.forEach(item => arrIndex.push(item.id));
  return arrIndex;
}

addEventList();
