import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class UserLoginContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        UserLoginContainer
        </h4>
      </div>
    );
  }
}

UserLoginContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
