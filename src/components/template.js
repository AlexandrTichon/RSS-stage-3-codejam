/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import findPoet from './templateGenerator/findSelectedPoet';

class Biography extends React.Component {
  constructor() {
    super();

    this.displayData = [];

    this.appendData = this.appendData.bind(this);
  }

  componentDidMount() {
    this.readPoetData();
  }

  readPoetData() {
    const POET = findPoet();
    POET.biography.forEach((element) => {
      this.appendData(element.date, element.description);
    });
  }

  appendData(date, descr) {
    this.displayData.push(<div id="display-data">
      {' '}
      <TimelineItem
        key="002"
        dateComponent={(
          <div
            style={{
              display: 'block',
              borderRadius: '3px',
              float: 'left',
              padding: '10px',
              background: '#61b8ff',
              color: '#000',
            }}
          >
            {date}
          </div>
          )}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}
      >
        <h4 style={{ color: '#61b8ff' }}>{descr}</h4>
        <p />
      </TimelineItem>
    </div>);
    this.forceUpdate();
  }

  render() {
    return (
      <div id="timelineContainer">
        <Timeline lineColor="#ddd">
          {this.displayData}
        </Timeline>
      </div>
    );
  }
}

export default Biography;
