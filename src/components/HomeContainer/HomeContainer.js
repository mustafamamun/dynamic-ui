import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import CategoryView from '../Common/CategoryView'

class HomeContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    const { categories } = this.props;
    return (
      <div>
          <Row>
            {categories.map((item , i) => {
              return (<Col md = {2} lg = {2} sm = {4} xs = {6} key = {i}><CategoryView item={item}></CategoryView></Col>)
            })}
          </Row>
      </div>
    );
  }
}

// HomeContainer.contextTypes = {
//   t: PropTypes.func.isRequired,
// };
function mapStateToProps(state) {
  return {
    categories : isEmpty(state.categories) ? [] : state.categories
  }
}

export default connect(mapStateToProps)(HomeContainer);
