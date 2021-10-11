import {reducer_name, types} from './emailValidationReducer'

const defaults = {
    reducer_name: reducer_name
}

export const validateEmail = store => next => action => {
    
    if (action.type==='EMAIL_CHANGED'){
        let result = next(action)
        store.dispatch({type: types.EMAIL_VALID,payload: action.payload,...defaults})
        return result
    }
    return next(action)
  }
  