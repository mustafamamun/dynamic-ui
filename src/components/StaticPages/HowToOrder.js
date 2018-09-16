import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class HowToOrder extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        HowToOrder
        </h4>
      </div>
    );
  }
}

HowToOrder.contextTypes = {
  t: PropTypes.func.isRequired,
};
