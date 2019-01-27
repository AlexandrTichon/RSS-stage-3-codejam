import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery/gallery';
import data from './data/poets-ru.json';
import Biography from './components/template';

console.log('it works!awesome!');

class GalleryDiv extends React.Component {
  render() {
    return (
      <Gallery name={data[0].name} url={data[0].gallery} increment={1} />
    );
  }
}


ReactDOM.render(<GalleryDiv />, window.document.getElementById('gallery-js'));
ReactDOM.render(<Biography />, document.getElementById('timeline-js'));
