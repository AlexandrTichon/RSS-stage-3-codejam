import data from './data/poets.json';
import savePoet from './components/templateGenerator/saveSelectedPoet';

function getDOMPoets() {
  const poetItems = document.createElement('div');
  poetItems.id = 'poet_items';
  poetItems.className = 'poet-items';
  data.forEach((item) => {
    const poetItem = document.createElement('div');
    poetItem.id = `poet-item-${item.id}`;
    poetItem.className = 'poet-item';
    poetItem.style.width = '200px';
    poetItem.style.height = '150px';
    poetItem.innerHTML = `
      <figure>
        <p><img src=${item.photo} alt=${item.name} /></p>
        <figcaption><a href="./poet.html">${item.name}<a></figcaption>
      </figure>`;
    poetItem.querySelector('a[href]').addEventListener('click', savePoet);
    poetItems.appendChild(poetItem);
  });
  if (document.getElementById('poets')) {
    document.getElementById('poets').appendChild(poetItems);
  }
}

function getSearchPoets() {
  const inputName = document.getElementById('poet_name').value.toLowerCase();
  const inputHometown = document.getElementById('poet_hometown').value.toLowerCase();
  let searchItems;
  if (!document.getElementById('search_items')) {
    searchItems = document.createElement('div');
    searchItems.id = 'search_items';
    searchItems.className = 'search-items';
  } else {
    searchItems = document.getElementById('search_items');
    searchItems.innerHTML = '';
  }

  if (!inputName && !inputHometown) {
    document.getElementById('poet_items').style.display = 'block';
  }

  if (inputName && !inputHometown) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.name.toLowerCase().search(inputName) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = 'По Вашему запросу ничего не найдено!';
      document.getElementById('poets').appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.style.width = '200px';
        searchItem.style.height = '150px';
        searchItem.innerHTML = `
          <figure>
            <p><img src=${item.photo} alt=${item.name} /></p>
            <figcaption><a href="./poet.html">${item.name}<a></figcaption>
          </figure>`;
        searchItem.querySelector('a[href]').addEventListener('click', savePoet);
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets').appendChild(searchItems);
    }
  }

  if (!inputName && inputHometown) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.hometown.toLowerCase().search(inputHometown) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = 'По Вашему запросу ничего не найдено!';
      document.getElementById('poets').appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.style.width = '200px';
        searchItem.style.height = '150px';
        searchItem.innerHTML = `
          <figure>
            <p><img src=${item.photo} alt=${item.name} /></p>
            <figcaption><a href="./poet.html">${item.name}<a></figcaption>
          </figure>`;
        searchItem.querySelector('a[href]').addEventListener('click', savePoet);
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets').appendChild(searchItems);
    }
  }

  if (inputName && inputHometown) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.name.toLowerCase().search(inputName) + 1
      && item.hometown.toLowerCase().search(inputHometown) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = 'По Вашему запросу ничего не найдено!';
      document.getElementById('poets').appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.style.width = '200px';
        searchItem.style.height = '150px';
        searchItem.innerHTML = `
          <figure>
            <p><img src=${item.photo} alt=${item.name} /></p>
            <figcaption><a href="./poet.html">${item.name}<a></figcaption>
          </figure>`;
        searchItem.querySelector('a[href]').addEventListener('click', savePoet);
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets').appendChild(searchItems);
    }
  }
}

const Key = (e) => {
  if (e.keyCode === 13) getSearchPoets();
};

function addEventList() {
  document.addEventListener('DOMContentLoaded', getDOMPoets);
  if (document.getElementById('search_button')) {
    document.getElementById('search_button').addEventListener('click', getSearchPoets);
    document.addEventListener('keydown', Key);
  }
}

function getIdPoets() {
  const arrIndex = [];
  data.forEach(item => arrIndex.push(item.id));
  return arrIndex;
}

export { addEventList, getIdPoets };
