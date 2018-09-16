import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class HowToPay extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        HowToPay
        </h4>
      </div>
    );
  }
}

HowToPay.contextTypes = {
  t: PropTypes.func.isRequired,
};
