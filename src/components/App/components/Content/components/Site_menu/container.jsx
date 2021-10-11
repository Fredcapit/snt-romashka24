import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './actions';



class Content extends Component {
    render() {
        const { goto } = this.props;
        return (
            <div id="content">

                <h1>Меню сайта</h1>
                <ul class="site_menu">
                    <li onClick={() => goto('about')}>О товариществе</li>
                    <li onClick={() => goto('contacts')}>Контакты</li>
                    <li onClick={() => goto('bankinfo')}>Реквизиты</li>
                    <li onClick={() => goto('docs')}>Документы общества</li>
                </ul>
            </div>
        )
    }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(Content)