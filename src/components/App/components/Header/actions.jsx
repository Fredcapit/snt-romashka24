
import { reducer_name } from './reducer';
import { push, goBack } from 'connected-react-router';


export const actions = {


    go_home: () => (dispatch, getState) => {
        dispatch(push(''));
    },

}