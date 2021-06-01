export const initialState = {

    stage: "Input_email",
    //Security data model
    SM: {
        user_key: undefined, // Simple session key
        timer: undefined
    },
    //Data model
    DM:{
        email: "",
        keycode: "",
    },
    //User Interface model
    UIM:{
       
        input_email_model:{
            email_input: {
                placeholder: 'Введите адрес электронной почты',
                disabled: false
            },
            button: {
                text: 'Отправить код',
                disabled: true
            },
            description_paragraph: {
                text: 'код будет отправлен на введённый Вами адрес электронной почты'
            },
            timer: {
                timeout: 1000,
                timer_init_value: 120000,
                timer_current_value: 0,
                text: "",
            },
            email_sent: false
        },
        verify_code: {
            input: {
                placeholder: 'Введите код здесь',
                disabled: false
            },
            button: {
                text: 'Подтвердить email',
                disabled: true
            },
            message: {
                text: '',
                visible: false
            }
        }
    }
}
