import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery/gallery';
import Writing from './components/writing/writing';
import dataRu from './data/poets-ru.json';
import dataBy from './data/poets-by.json';
import dataEng from './data/poets-eng.json';
import Biography from './components/template';
import setPoetInfo from './components/templateGenerator/setPoetInfo';
import findPoet from './components/templateGenerator/findSelectedPoet';
import getLang from './components/templateGenerator/getPageLang';

console.log('it works!awesome!');

const POET = findPoet();
const id = Number(POET.id);

const data = getLang(dataBy, dataEng, dataRu);

class WritingDiv extends React.Component {
  render() {
    const styles = {
      marginTop: '50px',
    };

    let i = 0;
    // const data = getLang();
    const length = data[id].works.length - 1;

    const writings = [];

    while (i < length) {
      writings.push(<Writing date={data[id].works[i].date} title={data[id].works[i].title} />);
      i += 1;
    }
    return (
      <div style={styles}>{ writings }</div>
    );
  }
}


class GalleryDiv extends React.Component {
  render() {
    return (
      <Gallery name={data[id].name} url={data[id].gallery} increment={1} />
    );
  }
}

setPoetInfo();

ReactDOM.render(<GalleryDiv />, window.document.getElementById('gallery-js'));
ReactDOM.render(<Biography />, document.getElementById('timeline-js'));
ReactDOM.render(<WritingDiv />, window.document.getElementById('writing-js'));
