import { push } from 'connected-react-router';

const defaults = {
    reducer_name: reducer_name
}


export const actions = {
    goto: (path) => async (dispatch, getState) => {
        dispatch(push(path))

    }
}