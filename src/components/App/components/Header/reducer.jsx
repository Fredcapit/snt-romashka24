import { initialState } from "@store/initialState";
import { BindReducer } from "@store/reducerBind";
import { types } from './actiontypes';


export const reducer_name = "Header";

export const Reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case types.NAVIGATION_TO_MENU:
            state.navigator.current_path = 'site_menu'

            return { ...state }

        default:
            return state;
    }
}
BindReducer(Reducer, reducer_name);