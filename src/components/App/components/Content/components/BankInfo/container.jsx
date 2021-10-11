import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from './actions';

import title_img from '@img/title_img.webp';

class Content extends Component {
    render() {

        return (
            <div id="content">

                <h2>Банковские реквизиты</h2>
                <dl id='bank_info'>
                    <dt>ИНН: </dt><dd> 5245025499</dd>
                    <dt>КПП:</dt><dd> 524501001</dd>
                    <dt>ОГРН: </dt><dd> 1145252002202</dd>
                    <dt>Счёт:</dt><dd>  40703810202500002896</dd>
                    <dt>Банк: </dt><dd> ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"</dd>
                    <dt>БИК:</dt><dd>  04525999</dd>
                    <dt>Город: </dt><dd> г.Москва</dd>
                    <dt>Корр счёт:</dt><dd>  30101810845250000999</dd>
                    <dt>Адрес почтовый:</dt><dd>  607602 Нижегородская область, г.Богородск, ул.М.Горького, д 57</dd>
                    <dt>Адрес юридический:</dt><dd>  607602 Нижегородская область, г.Богородск, ул.М.Горького, д 57</dd>
                </dl>
            </div >
        )
    }
}

export default connect(
    state => state
)(Content)