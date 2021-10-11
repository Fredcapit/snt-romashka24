import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ustav from '@downloads/Устав.pdf';
import svidetelstvo_INN from '@downloads/СвидетельствоИНН.jpg';
import svidetelstvo_OGRN from '@downloads/СвидетельствоОГРН.jpg';

class Content extends Component {
    render() {


        return (
            <div id="content">

                <h2>Документы общества</h2>
                <ul class='downloads'>
                    <li>
                        <a href={ustav} target='_blank'>Устав</a>
                    </li>
                    <li>
                        <a href={svidetelstvo_INN} target='_blank'>Свидетельство ИНН</a>
                    </li>
                    <li>
                        <a href={svidetelstvo_OGRN} target='_blank'>Свидетельство ОГРН</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(
    state => state
)(Content)