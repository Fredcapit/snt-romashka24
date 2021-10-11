import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './actions';

import { Route, Switch } from 'react-router';

import Main from './components/Main/container';
import Site_menu from './components/Site_menu/container';
import About from './components/About/container';
import Contacts from './components/Contacts/container';
import BankInfo from './components/BankInfo/container';
import Docs from './components/Docs/container';
import Privacy from './components/Privacy/container';

class Content extends Component {
    render() {

        return (

            <Switch>
                <Route exact={true} path="/" component={Main} />
                <Route exact={true} path="/site_menu" component={Site_menu} />
                <Route exact={true} path="/about" component={About} />
                <Route exact={true} path="/contacts" component={Contacts} />
                <Route exact={true} path="/bankinfo" component={BankInfo} />
                <Route exact={true} path="/docs" component={Docs} />
                <Route exact={true} path="/privacy" component={Privacy} />
            </Switch>

        )
    }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(Content)