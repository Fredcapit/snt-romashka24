import axios from 'axios';

axios.defaults.baseURL=document.baseURI;
export const api={

    getKeyCode: async (old_key)=>{
        try {
            if (old_key){
                return (await axios.get('/api/security/get_key', {
                    params: {user_key: old_key}
                })).data
            }else {
                return (await axios.get('/api/security/get_key' )).data
            }
        }
        catch {
            console.log("error with getting key")
            return -1;
        }
    },
    sendEmail: async(email, user_key)=>{
        try{
            return (await axios.get('/api/email_confirmation/require_key', {params: {email: email, user_key: user_key}})).data
        }
        catch{
            return -1
        }
    },
    verifyCode: async (email, keycode, user_key)=>{
        try{
            return (await axios.get('/api/email_confirmation/verify', {params: {email: email, user_key: user_key, keycode: keycode}})).data
        }catch{
            return -1
        }
    }
}