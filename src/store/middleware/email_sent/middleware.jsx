import {reducer_name, types} from './reducer'

const defaults = {
    reducer_name: reducer_name
}

export const email_send_timer = store => next => action => {
    
    if (action.type==='EMAIL_SENT'){
        let result = next(action)
        store.dispatch({type: types.EMAIL_SENT_TIMER_START,...defaults})
        let timer=window.setInterval(()=>{
            let time=store.getState().reducer.UIM.input_email_model.timer.timer_current_value
            if (time>0){
                store.dispatch({type: types.EMAIL_SENT_TIMER_TICK,...defaults})
            } else {
                window.clearInterval(timer)
                store.dispatch({type: types.EMAIL_SENT_TIMER_END, ...defaults})
            }
        },store.getState().reducer.UIM.input_email_model.timer.timeout)
    
        return result
    }
    return next(action)
  }
  