import { types } from './actiontypes';
import { reducer_name } from './reducer';
import { api } from '@store/api'
import { push, goBack } from 'connected-react-router';

const defaults = {
    reducer_name: reducer_name
}
export const actions = {


    go_home: () => (dispatch, getState) => {
        dispatch(push(''));
    },

}