import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class ProductTemplate extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
             ProductTemplate
        </h4>
      </div>
    );
  }
}

ProductTemplate.contextTypes = {
  t: PropTypes.func.isRequired,
};
