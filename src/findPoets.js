import data from './data/poets-ru.json';

function getIdPoets() {
  if (window.check === undefined) {
    window.check = 0;
  }

  function getId(event) {
    let [...id] = event.target
      .parentNode
      .parentNode
      .parentNode
      .id;
    id.splice(0, 10);
    id = id.join('');
    if (!localStorage.getItem('poetId')) {
      localStorage.setItem('poetId', id);
    } else {
      localStorage.setItem('poetId', id);
    }
  }

  if (!window.check) {
    const timerId = setInterval(() => {
      if (document.querySelectorAll('.poet-items').length) {
        const divs = document.querySelectorAll('.poet-items');
        for (let i = 0; i < divs.length; i += 1) {
          divs[i].addEventListener('click', getId, false);
        }
        clearInterval(timerId);
      }
    }, 1000);
  }
}

function getIdSearch() {
  if (window.check === undefined) {
    window.check = 0;
  }

  function getId(event) {
    let [...id] = event.target
      .parentNode
      .parentNode
      .parentNode
      .id;
    id.splice(0, 10);
    id = id.join('');
    if (!localStorage.getItem('poetId')) {
      localStorage.setItem('poetId', id);
    } else {
      localStorage.setItem('poetId', id);
    }
  }

  if (!window.check) {
    const timerId = setInterval(() => {
      if (document.querySelectorAll('.search-items').length) {
        const divs = document.querySelectorAll('.search-items');
        for (let i = 0; i < divs.length; i += 1) {
          divs[i].addEventListener('click', getId, false);
          window.check = 1;
        }
        clearInterval(timerId);
      }
    }, 1000);
  }
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
      <figure>
        <p><img src=${item.photo} alt=${item.name} /></p>
        <figcaption><a href="./poet.html" target="_blank">${item.name}<a></figcaption>
      </figure>`;
    poetItems.appendChild(poetItem);
  });
  if (document.getElementById('poets')) {
    document.getElementById('poets')
      .appendChild(poetItems);
  }
  getIdPoets();
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
      .style.display = 'block';
  }

  if (inputName && !inputBirthplace) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.name
      .toLowerCase()
      .search(inputName) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = 'По Вашему запросу ничего не найдено!';
      document.getElementById('poets')
        .appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.innerHTML = `
          <figure>
            <p><img src=${item.photo} alt=${item.name} /></p>
            <figcaption><a href="./poet.html" target="_blank">${item.name}<a></figcaption>
          </figure>`;
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets')
        .appendChild(searchItems);
      getIdSearch();
    }
  }

  if (!inputName && inputBirthplace) {
    document.getElementById('poet_items').style.display = 'none';
    const dataFilter = data.filter(item => item.birthplace
      .toLowerCase()
      .search(inputBirthplace) + 1);
    if (!dataFilter.length) {
      searchItems.innerHTML = 'По Вашему запросу ничего не найдено!';
      document.getElementById('poets')
        .appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.innerHTML = `
          <figure>
            <p><img src=${item.photo} alt=${item.name} /></p>
            <figcaption><a href="./poet.html" target="_blank">${item.name}<a></figcaption>
          </figure>`;
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets')
        .appendChild(searchItems);
      getIdSearch();
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
      searchItems.innerHTML = 'По Вашему запросу ничего не найдено!';
      document.getElementById('poets')
        .appendChild(searchItems);
    } else {
      dataFilter.forEach((item) => {
        const searchItem = document.createElement('div');
        searchItem.id = `poet-item-${item.id}`;
        searchItem.className = 'poet-item';
        searchItem.innerHTML = `
          <figure>
            <p><img src=${item.photo} alt=${item.name} /></p>
            <figcaption><a href="./poet.html" target="_blank">${item.name}<a></figcaption>
          </figure>`;
        searchItems.appendChild(searchItem);
      });
      document.getElementById('poets')
        .appendChild(searchItems);
      getIdSearch();
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

addEventList();
