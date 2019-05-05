import { userInitState } from '../state/userInitState'
const userReducer = (state = userInitState, actions)=> {
    switch(actions.type) {
        case 'username':
             console.log(actions)
                   state = {
                       ...state,
                       username: actions.payload
                   }
            break;
    }
    return state
}

export default userReducer;

