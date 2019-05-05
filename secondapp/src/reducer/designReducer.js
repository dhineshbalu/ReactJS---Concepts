import { designInitState} from '../state/designInitState'
  const designReducer = (state = designInitState, actions)=> {
    switch(actions.type) {
        case 'designID':
             console.log(actions)
                   state = {
                       ...state,
                       designID: actions.payload
                   }
            break;
     

    }
    return state
}

export default designReducer;
