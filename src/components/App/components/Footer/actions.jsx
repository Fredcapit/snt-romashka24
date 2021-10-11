import { types } from './actiontypes';
import { reducer_name } from './reducer';
import { api } from '@store/api'
import { push, goBack } from 'connected-react-router';

const defaults = {
    reducer_name: reducer_name
}
export const actions = {
    click: () => async (dispatch, getState) => {
        dispatch(push('site_menu'));


    },

    go_back: () => (dispatch, getState) => {
        dispatch(push(''));
    },
    go_privacy: () => (dispatch) => {
        dispatch(push('privacy'));
    }

}