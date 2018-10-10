import PropTypes from 'prop-types';
import React from 'react';

export default class HomeContainer extends React.Component {
  
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
