import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from './actions';

import title_img from '@img/title_img.webp';

class Content extends Component {
    render() {

        return (
            <div id="content">

                <h2>Контакты</h2>
                <div id='contacts'>

                    <h4>Председатель Товарищества:</h4>
                    <p>Авдеева Ксения Владимировна</p>
                    <a href="tel:+7910890311">тел.: +7 910 89 03 11</a>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state
)(Content)