import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './actions';


class InputEmail extends Component {
    render() {
        const { click, email_onedit, go_next } = this.props;
        const { input_email_model } = this.props.reducer.UIM;
        const { email } = this.props.reducer.DM;
        return (
            <div id='Form_area'>
                <div id='input'>
                    <input id="uim__input_email_model_email_input" type="text" disabled={input_email_model.email_input.disabled} value={email} onChange={email_onedit} autoComplete="Off" placeholder={input_email_model.email_input.placeholder} />
                    <button id="uim_input_email_model_button" type="button" disabled={input_email_model.button.disabled} onClick={click}>{input_email_model.button.text}</button>

                </div>
                <div id='description'>

                    <p id='uim_input_email_model_description_paragraph'>{input_email_model.description_paragraph.text}</p>

                    {input_email_model.email_sent ? (
                        <button id='uim_input_email_model_return_to_enter_code' type="button" onClick={go_next}>Ввести код</button>
                    ) : (null)}
                </div>
            </div>
        )
    }
}

export default connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(InputEmail)