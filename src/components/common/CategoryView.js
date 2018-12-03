import PropTypes from 'prop-types';
import React from 'react';
import { layout } from '../../stylesheets/js/CategoryView'

// Not found page component
export default class CategoryView extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { item } = this.props;
        
    return (
      <div style={layout}>
        {item.name}
      </div>
    );
  }
}

// CategoryView.contextTypes = {
//   t: PropTypes.func.isRequired,
// };
