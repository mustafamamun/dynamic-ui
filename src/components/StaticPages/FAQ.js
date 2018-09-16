import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class FAQ extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        FAQ
        </h4>
      </div>
    );
  }
}

FAQ.contextTypes = {
  t: PropTypes.func.isRequired,
};
