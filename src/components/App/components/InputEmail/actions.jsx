import {types} from './actiontypes';
import  {reducer_name} from './reducer';
import {api} from '@store/api';


const defaults = {
    reducer_name: reducer_name
}


export const actions = {
    click: ()=> async (dispatch, getState)=>{

        dispatch({type: types.EMAIL_SENDING, ...defaults});

        //Clear Security Management timer. Get new user_key
        if (getState().reducer.SM.timer!==undefined){
            clearInterval(getState().reducer.SM.timer)
        }else {
            const {user_key} = await api.getKeyCode()
            dispatch({type: types.USER_KEY_RECEIVED, payload: user_key, ...defaults})
        }

        //Init new timer to renew user_key
        let timer = setInterval(async()=>{
            const {user_key} = await api.getKeyCode(getState().reducer.SM.user_key)
            dispatch({type: types.USER_KEY_RECEIVED, payload: user_key, ...defaults})
        },60*1000)
        //Store timer in state        
        dispatch({type: types.USER_KEY_TIMER_INIT, payload: timer, ...defaults})

        const { user_key }=getState().reducer.SM

        if (user_key==-1){

            dispatch({type: types.EMAIL_SEND_FAILED,...defaults});

        }
        else {
            const email = getState().reducer.DM.email
            const res = await api.sendEmail(email,user_key)
            if (res!==-1 && res.keycode!=='error'){
                dispatch({type: types.EMAIL_SENT,payload: user_key, ...defaults});
            }else{
                if (res.keycode==='error'){
                    dispatch({type: types.EMAIL_SEND_ERROR, ...defaults})
                }
                else {
                    dispatch({type: types.EMAIL_SEND_FAILED,...defaults});
                }
            }
        }
        
    },
    email_onedit: (event)=>async (dispatch, getState)=>{
        dispatch({type: types.EMAIL_CHANGED, payload: event.target, ...defaults});
    },
    go_next: ()=>(dispatch)=>{
        dispatch({type: types.GO_NEXT,...defaults})
    }
}