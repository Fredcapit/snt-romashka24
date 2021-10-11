import { types } from './actiontypes';
import { reducer_name } from './reducer';
import { api } from '@store/api';
import { push } from 'connected-react-router';

const defaults = {
    reducer_name: reducer_name
}


export const actions = {
    goto: (path) => async (dispatch, getState) => {
        dispatch(push(path))

    }
}