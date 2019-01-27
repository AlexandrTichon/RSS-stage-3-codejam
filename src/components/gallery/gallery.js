import React from 'react';
import './gallery.css';
import PropTypes from 'prop-types';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    const img0 = props.url[0];
    const img1 = props.url[1];
    const img2 = props.url[2];

    this.state = {
      index: 0,
      imgList: [img0, img1, img2],
    };
  }

  onClickForward() {
    if (this.state.index + this.props.increment === this.state.imgList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState((state, props) => ({
        index: state.index + props.increment,
      }));
    }
  }

  onClickBack() {
    if (this.state.index - this.props.increment === -1) {
      this.setState((state, props) => ({
        index: state.imgList.length - props.increment,
      }));
    } else {
      this.setState((state, props) => ({
        index: state.index - props.increment,
      }));
    }
  }

  onKeyPress(e) {
    if (e.keyCode === 39) {
      this.onClickForward();
    } else if (e.keyCode === 37) {
      this.onClickBack();
    }
  }

  render() {
    return (
      <div className="gallery_wrapper">
        <img className="poet_photo" alt={this.props.name} src={this.state.imgList[this.state.index]} />
        <div className="btn_wrapper">
          <button className="gallery_btn" type="button" onClick={this.onClickBack}><img src="https://img.icons8.com/dotty/80/000000/back.png" alt="left_arrow" /></button>
          <button className="gallery_btn" type="button" onClick={this.onClickForward}><img src="https://img.icons8.com/dotty/80/000000/forward.png" alt="right_arrow" /></button>
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  url: PropTypes.arrayOf(PropTypes.string).isRequired,
  increment: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Gallery;
