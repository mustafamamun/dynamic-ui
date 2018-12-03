import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Common/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/css/font-awesome.min.css'
import '../stylesheets/css/index.css'
import { layout, mainPageLayout } from '../stylesheets/js/App';

class App extends Component {
  componentWillMount(){
    this.props.dispatch({ type: 'GET_CATEGORIES' });
  }
  render() {
    const { children } = this.props;
    return (
      <div style = { mainPageLayout }> 
          <Header  />
          <div style = { layout } >
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
