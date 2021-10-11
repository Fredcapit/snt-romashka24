import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actions } from './actions';



class Content extends Component {
    render() {

        return (
            <div id="content">

                <h2>О товариществе</h2>
                <div>
                    <h3>
                        Цели:
                    </h3>
                    <ol id='goals'>
                        <li>Создание благоприятных условий, делающих возможным ведение гражданами садоводства</li>
                        <li>Содействие гражданам в освоении индивидуальных земельных участков</li>
                        <li>Содействие членам Товарищества по взаимодействию между собой и третьими лицами</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state
)(Content)