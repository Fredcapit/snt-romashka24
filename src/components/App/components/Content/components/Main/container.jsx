import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from './actions';

import title_img from '@img/title_img.webp';

class Content extends Component {
    render() {

        return (
            <div id="content">

                <h3>Основано в 1993 году</h3>
                <div class="title_content">
                    <img src={title_img} alt="" type="image/webp" />
                </div>
            </div>
        )
    }
}

export default connect(
    state => state
)(Content)