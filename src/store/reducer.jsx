import {initialState} from './initialState';
import {reducers} from './reducerBind';


export const reducer = (state, action)=>{
    state = state || initialState;
    let reducer=reducers.find(x=>x.name===action.reducer_name);
    
    if (reducer)
        return reducer.use_reducer(state,action);
    return state;
}