import { addEventList, getIdPoets } from './poets';
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery/gallery';
import data from './data/poets_ru.json';
import './components/biography';


console.log('it works!awesome!');
console.log(getIdPoets());
addEventList();

class GalleryDiv extends React.Component {
  render() {
    return (
      <Gallery name={data[0].name} url={data[0].gallery} increment={1} />
    );
  }
}

ReactDOM.render(<GalleryDiv />, window.document.getElementById('gallery-js'));
