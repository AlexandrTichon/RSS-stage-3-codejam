import findPoet from './findSelectedPoet';

function setPoetInfo() {
  const POET = findPoet();
  document.querySelector('#poet-name').textContent = POET.name;
  document.querySelector('#poet-photo').src = POET.photo;
}

export default setPoetInfo;
