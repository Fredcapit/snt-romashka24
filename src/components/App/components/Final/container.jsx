
import React, { Component} from 'react';
import { connect } from 'react-redux';


class Final extends Component {
    render(){
        return (
            <div id='Final'>
                <p>Ваш адрес электронной почты успешно подтверждён!</p>
            </div>
        )
    }
}

export default connect (
    state=>state)(Final)


