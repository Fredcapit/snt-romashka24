
import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { actions } from './actions';

import Header from './components/Header/container';
import Footer from './components/Footer/container';
import Content from './components/Content/container';

export default class App extends Component {

  render() {
    return (
      

        
        <main>
          <Header />
          <Content />
          <Footer />
        </main>
        
      

    )
  }
}

// export default connect(
//   state => state,
//   dispatch => bindActionCreators(actions, dispatch)
// )(App)