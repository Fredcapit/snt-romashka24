import { types } from './actiontypes';
import { reducer_name } from './reducer';
import { api } from '@store/api'

const defaults = {
    reducer_name: reducer_name
}
export const actions = {
    click: () => async (dispatch, getState) => {

        dispatch({ type: types.KEYCODE_SENDING, ...defaults });
        const { reducer } = getState()
        const result = await api.verifyCode(reducer.DM.email, reducer.DM.keycode, reducer.SM.user_key)

        if (result === -1) {
            dispatch({ type: types.KEYCODE_SEND_FAILED, ...defaults })
        } else {

            if (result.keycode === 'error') {
                dispatch({ type: types.KEYCODE_SENT_ERROR, ...defaults })
            }
            else {

                if (result.email === reducer.DM.email && result.verified === 1) {
                    dispatch({ type: types.KEYCODE_SENT_SUCCESS, ...defaults })
                    clearInterval(getState().reducer.SM.timer)
                } else {
                    dispatch({ type: types.KEYCODE_SENT_ERROR, ...defaults })
                }

            }
        }
    },
    keycode_onEdit: (event) => (dispatch, getState) => {
        dispatch({ type: types.KEYCODE_CHANGED, payload: event.target, ...defaults })
    },
    go_back: () => (dispatch, getState) => {
        dispatch({ type: types.GO_BACK, ...defaults })
    },
    send_email_again: () => async (dispatch, getState) => {
        const email = getState().reducer.DM.email
        const user_key = getState().reducer.SM.user_key
        const res = await api.sendEmail(email, user_key)
        if (res !== -1) {
            dispatch({ type: "EMAIL_SENT", payload: user_key, reducer_name: "InputEmail" });
        } else {
            dispatch({ type: "EMAIL_SEND_FAILED", reducer_name: "InputEmail" });
        }
    }
}