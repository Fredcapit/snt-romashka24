
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './actions';

import InputEmail from './components/InputEmail/container'
import VerifyCode from './components/VerifyCode/container'
import Final from './components/Final/container'


class App extends Component {
  
  render() {
    let getView=(stage)=>{

      switch(stage){
        case "Input_email":
          return <InputEmail />
        case "VerifyCode":
          return <VerifyCode/>
        case "Code_verified":
          return <Final/>
        default:
          return   <p id='Error'>Произошла непредвиденная ошибка</p>
      }
    }
    const result_View=getView(this.props.reducer.stage)
  
    return (
<React.Fragment>
  <div></div>
    {result_View}
<div></div>
</React.Fragment>
    )
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(App)