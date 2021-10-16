

import { push } from 'connected-react-router';


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