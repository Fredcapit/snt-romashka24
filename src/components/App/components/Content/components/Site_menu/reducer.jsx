import { initialState } from "@store/initialState";
import { BindReducer } from "@store/reducerBind";
import { types } from './actiontypes';

export const reducer_name = "SiteMenu";

export const Reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case types.EMAIL_CHANGED:
            state.DM.email = action.payload.value;
            state.UIM.input_email_model.email_sent = false
            return { ...state }
        case types.USER_KEY_RECEIVED:
            state.SM.user_key = action.payload;
            return { ...state }
        case types.USER_KEY_TIMER_INIT:
            state.SM.timer = action.payload
            return { ...state }
        case types.EMAIL_SENDING:
            state.UIM.input_email_model.button.disabled = true
            state.UIM.input_email_model.email_input.disabled = true
            state.UIM.input_email_model.button.text = 'Отправка...'
            return { ...state }
        case types.EMAIL_SEND_FAILED:
            state.UIM.input_email_model.button.disabled = false
            state.UIM.input_email_model.email_input.disabled = false
            state.UIM.input_email_model.button.text = 'Попробовать снова'
            state.UIM.input_email_model.description_paragraph.text = 'Не удалось отправить код. Возможно проблемы с сетью. Попробуйте снова.'
            return { ...state }
        case types.EMAIL_SEND_ERROR:
            state.UIM.input_email_model.button.disabled = false
            state.UIM.input_email_model.email_input.disabled = false
            state.UIM.input_email_model.button.text = 'Попробовать снова'
            state.UIM.input_email_model.description_paragraph.text = 'Не удалось отправить код. Возможно email не зарегистрирован на сайте.'
            return { ...state }
        case types.EMAIL_SENT:
            state.SM.user_key = action.payload
            state.UIM.input_email_model.description_paragraph.text = 'Код успешно отправлен на Ваш адрес электронной почты. Проверьте почту.'
            state.UIM.input_email_model.button.text = 'Отправить код'
            state.stage = "VerifyCode"
            state.UIM.input_email_model.email_sent = true
            return { ...state }
        case types.GO_NEXT:
            state.stage = "VerifyCode"
            return { ...state }
        default:
            return state;
    }
}
BindReducer(Reducer, reducer_name);