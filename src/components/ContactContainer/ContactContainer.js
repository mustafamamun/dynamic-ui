import PropTypes from 'prop-types';
import React from 'react';

// Not found page component
export default class ContactContainer extends React.Component {
  // render
  render() {
    return (
      <div >
        <h4>
        ContactContainer
        </h4>
      </div>
    );
  }
}

ContactContainer.contextTypes = {
  t: PropTypes.func.isRequired,
};
