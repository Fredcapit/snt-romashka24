import { initialState } from "@store/initialState";
import { BindReducer } from "@store/reducerBind";
import { validate } from '@extensions/email-validator'



export const types ={ 
    EMAIL_SENT_TIMER_START: "EMAIL_SENT_TIMER_START",
    EMAIL_SENT_TIMER_TICK: "EMAIL_SENT_TIMER_TICK",
    EMAIL_SENT_TIMER_END: "EMAIL_SENT_TIMER_END",

}

export const reducer_name = "email_sent_timer";

export const Reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case types.EMAIL_SENT_TIMER_START:
            state.UIM.input_email_model.timer.timer_current_value=state.UIM.input_email_model.timer.timer_init_value
            state.UIM.input_email_model.timer.visible=true
            state.UIM.input_email_model.timer.text=`Повторная отправка кода будет возможна через ${state.UIM.input_email_model.timer.timer_current_value/1000} секунд`
            state.UIM.input_email_model.button.disabled=true
            state.UIM.input_email_model.email_input.disabled=true
            return {...state}
        case types.EMAIL_SENT_TIMER_TICK:
            state.UIM.input_email_model.timer.timer_current_value-=state.UIM.input_email_model.timer.timeout
            state.UIM.input_email_model.timer.text=`Повторная отправка кода будет возможна через ${state.UIM.input_email_model.timer.timer_current_value/1000} секунд`
            return {...state}
        case types.EMAIL_SENT_TIMER_END:
            state.UIM.input_email_model.timer.visible=false
            state.UIM.input_email_model.timer.text=""
            state.UIM.input_email_model.button.disabled=false
            state.UIM.input_email_model.email_input.disabled=false
            return {...state}
        default:
            return state;
    }
}
BindReducer(Reducer, reducer_name);