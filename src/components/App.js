import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Common/Header'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/css/font-awesome.min.css'
import '../stylesheets/css/index.css'
class App extends Component {
  componentWillMount(){
    this.props.dispatch({ type: 'GET_CATEGORIES' });
  }
  render() {
    const { children } = this.props;
    return (
      <div>
          <Header  />
          <div >
              <div >
                {children}
              </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(App);
