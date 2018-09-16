import React, { Component } from 'react'
import Header from './common/Header'
import Tabs from './common/Tabs'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/css/font-awesome.min.css'
import '../stylesheets/css/index.css'
class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
          <Header  />
          <div >
              {/* <Tabs /> */}
              <div >
                {children}
              </div>
          </div>
        </div>
    );
  }
}

export default App
