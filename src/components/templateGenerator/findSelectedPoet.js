import dataRu from '../../data/poets-ru.json';
import dataEng from '../../data/poets-eng.json';
import dataBy from '../../data/poets-by.json';
import getLang from './getPageLang';

function findPoet() {
  const findItem = localStorage.getItem('userSelect');
  // eslint-disable-next-line consistent-return
  const data = getLang(dataBy, dataEng, dataRu);
  let currentObject;
  data.forEach((element) => {
    if (element.name === findItem) {
      currentObject = element;
    }
  });
  return currentObject;
}

export default findPoet;
