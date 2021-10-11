import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './actions';



class Footer extends Component {
    render() {
        const { click, go_back, go_privacy } = this.props;
        const { pathname } = this.props.router.location;
        console.log(pathname)
        return (

            <div id="footer">
                {pathname !== '/site_menu' ?
                    (
                        <p onClick={click}>
                            Меню сайта
                        </p>
                    ) : (
                        <p onClick={go_back}>
                            на главную
                        </p>
                    )}

                <p class="privacy_link" onClick={go_privacy}> Политика конфиденциальности</p>
            </div>

        )
    }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(Footer)