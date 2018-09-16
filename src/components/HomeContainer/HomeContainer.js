import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class HomeContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
          HomeContainer
        </h4>
      </div>
    );
  }
}

HomeContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
