import data from '../../data/poets-ru.json';

function findPoet() {
  const findItem = localStorage.getItem('userSelect');
  // eslint-disable-next-line consistent-return
  let currentObject;
  data.forEach((element) => {
    if (element.name === findItem) {
      currentObject = element;
    }
  });
  return currentObject;
}

export default findPoet;
