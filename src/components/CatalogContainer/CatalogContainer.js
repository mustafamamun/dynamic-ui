import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class CatalogContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        CatalogContainer
        </h4>
      </div>
    );
  }
}

CatalogContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
