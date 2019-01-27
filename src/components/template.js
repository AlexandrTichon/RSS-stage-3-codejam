import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import findPoet from './templateGenerator/findSelectedPoet';

class Biography extends React.Component {
  render() {
    return (
      <div>
        {findPoet()}
        <Timeline lineColor="#ddd">
          <TimelineItem
            key="002"
            dateText="date"
            dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
            bodyContainerStyle={{
              background: '#ddd',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 style={{ color: '#61b8ff' }}>Title</h3>
            <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
            <p />
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default Biography;
