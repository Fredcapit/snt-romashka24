import {types} from './actiontypes';
import  {reducer_name} from './reducer';


const defaults = {
    reducer_name: reducer_name
}
export const actions = {
    click: ()=> (dispatch, getState)=>{
        dispatch({type: types.BUTTON_CLICK, ...defaults});
       
    }
}