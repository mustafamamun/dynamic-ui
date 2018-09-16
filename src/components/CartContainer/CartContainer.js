import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class CartContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        CartContainer
        </h4>
      </div>
    );
  }
}

CartContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
