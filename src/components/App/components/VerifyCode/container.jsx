import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './actions';

class VerifyCode extends Component {
    render() {
        const { input, button, message } = this.props.reducer.UIM.verify_code
        const { email_sent, timer } = this.props.reducer.UIM.input_email_model
        const { keycode, email } = this.props.reducer.DM
        const { click, keycode_onEdit, go_back, send_email_again } = this.props
        return (

            <div id='Form_area'>

                <div id="input">
                    <label htmlFor='uim__vefiry_code__input'>Чтобы подтвердить адрес <strong>{email}</strong> введите полученный код</label>
                    <input id="uim__vefiry_code__input" type="text"
                        disabled={input.disabled}
                        value={keycode} onChange={keycode_onEdit}
                        autoComplete="Off"
                        placeholder={input.placeholder} />

                    <button id="uim_verify_code__button" type="button"
                        disabled={button.disabled}
                        onClick={click}>
                        {button.text}
                    </button>
                </div>
                <div id="description">

                    <p id='uim__verify_code_message'>
                        {message.text}
                    </p>
                    <button  id='uim_verify_code_another_email' type="button" onClick={go_back}>Ввести другой email</button>
                    {(email_sent && timer.timer_current_value === 0) ? (
                        <button id='uim_verify_code_resend' type="button" onClick={send_email_again} >Отправить код повторно</button>
                    ) : (
                        <p>{timer.text}</p>
                    )}
                </div>
            </div>

        )
    }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(VerifyCode)