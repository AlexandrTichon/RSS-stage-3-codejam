import React from 'react';
import './writing.css';
import PropTypes from 'prop-types';

class Writing extends React.Component {
  render() {
    return (
      <p className="writing">
        <b>{this.props.date}</b>
        :
        <span><i>{this.props.title}</i></span>
      </p>
    );
  }
}

Writing.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Writing;
