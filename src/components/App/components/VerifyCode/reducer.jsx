import { initialState } from "@store/initialState";
import { BindReducer } from "@store/reducerBind";
import { types } from './actiontypes';

export const reducer_name = "VerifyCode";

export const Reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case types.KEYCODE_CHANGED:
            state.DM.keycode = action.payload.value

            state.UIM.verify_code.button.disabled = !(state.DM.keycode.length > 0)

            return { ...state }
        case types.KEYCODE_SENDING:
            state.UIM.verify_code.input.disabled = true
            state.UIM.verify_code.button.disabled = true
            state.UIM.verify_code.message.text = 'Проверка...'
            return { ...state }
        case types.KEYCODE_SEND_FAILED:
            state.UIM.verify_code.input.disabled = false
            state.UIM.verify_code.button.disabled = false
            state.UIM.verify_code.button.text = 'Подтвердить email'
            state.UIM.verify_code.message.text = 'Произошла ошибка отправки. Попробуйте снова'
            return { ...state }
        case types.KEYCODE_SENT_ERROR:
            state.UIM.verify_code.input.disabled = false
            state.UIM.verify_code.button.disabled = false
            state.UIM.verify_code.button.text = 'Подтвердить email'
            state.UIM.verify_code.message.text = 'Введён неверный код. Попробуйте снова'
            return { ...state }
        case types.KEYCODE_SENT_SUCCESS:
            state.UIM.verify_code.input.disabled = false
            state.UIM.verify_code.button.disabled = false
            state.UIM.verify_code.button.text = 'Подтвердить email'
            state.UIM.verify_code.message.text = ''
            state.stage = 'Code_verified'
            return { ...state }
        case types.GO_BACK:
            state.stage = "Input_email"
            state.UIM.input_email_model.timer.timer_current_value = 0
            state.UIM.input_email_model.email_input.disabled = false
            return { ...state }
        default:
            return state;
    }
}
BindReducer(Reducer, reducer_name);