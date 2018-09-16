import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class TrackOrderContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        TrackOrderContainer
        </h4>
      </div>
    );
  }
}

TrackOrderContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
