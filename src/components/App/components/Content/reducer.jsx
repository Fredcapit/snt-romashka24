import { initialState } from "@store/initialState";
import { BindReducer } from "@store/reducerBind";


export const reducer_name = "Content";

export const Reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {

        default:
            return state;
    }
}
BindReducer(Reducer, reducer_name);