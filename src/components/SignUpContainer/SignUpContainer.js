import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class SignUpContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        SignUpContainer
        </h4>
      </div>
    );
  }
}

SignUpContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
