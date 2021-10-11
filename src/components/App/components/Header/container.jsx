import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';

class Header extends Component {
    render() {
        const { go_home } = this.props;
        return (
            <div id="header">

                <p onClick={go_home}>СНТ "Ромашка"</p>
                <p>Россия, Нижегородская обл., г. Богородск</p>
            </div>
        )
    }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(Header)


