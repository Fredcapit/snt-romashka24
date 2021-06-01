import { initialState } from "@store/initialState";
import  {BindReducer}  from "@store/reducerBind";
import {types} from './actiontypes';

export const reducer_name="App";

export const Reducer = (state, action)=>{
    state = state || initialState;
    switch (action.type) {
        


        default:
            return state;
    }
}
BindReducer(Reducer,reducer_name);