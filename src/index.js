import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/gallery/gallery';
import Writing from './components/writing/writing';
import data from './data/poets-ru.json';
import Biography from './components/template';
import setPoetInfo from './components/templateGenerator/setPoetInfo';


console.log('it works!awesome!');

class WritingDiv extends React.Component {
  constructor(props) {
    super(props);

    const len = data[1].works.length - 1;

    this.state = {
      length: len,
    };
  }

  render() {
    const styles = {
      marginTop: '50px',
    };
    // const writings = [];
    let i = 0;

    const writings = [];

    while (i < this.state.length) {
      writings.push(<Writing date={data[0].works[i].date} title={data[0].works[i].title} />);
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
      <Gallery name={data[0].name} url={data[0].gallery} increment={1} />
    );
  }
}

setPoetInfo();

ReactDOM.render(<GalleryDiv />, window.document.getElementById('gallery-js'));
ReactDOM.render(<Biography />, document.getElementById('timeline-js'));
ReactDOM.render(<WritingDiv />, window.document.getElementById('writing-js'));
