import { initialState } from "@store/initialState";
import { BindReducer } from "@store/reducerBind";
import { validate } from '@extensions/email-validator';



export const types ={ 
    EMAIL_VALID: "EMAIL_VALID"
}

export const reducer_name = "EmailValidation";

export const Reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case types.EMAIL_VALID:
            state.UIM.input_email_model.button.disabled=!validate(state.DM.email)
            return {...state}
        default:
            return state;
    }
}
BindReducer(Reducer, reducer_name);