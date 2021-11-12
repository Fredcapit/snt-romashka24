import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
// import { actions } from './actions';



class Content extends Component {
    render() {

        return (
            <div id="content">

                <h2>Контакты</h2>
                <div id='contacts'>

                    <h4>Председатель Товарищества:</h4>
                    <p>Авдеева Ксения Владимировна</p>
                    <a href="tel:+79108890311">тел.: +7 910 889 03 11</a>
                    <br />
                    <a href="mailto:avdeevakv@snt-romashka24.ru?subject=[from_site]:">avdeevakv@snt-romashka24.ru</a>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state
)(Content)
