import React , { Component } from 'react'
import { Provider } from './context'
import ConsumerC from './ConsumerC'
class ProviderC extends Component {
    constructor() {
        super()
        this.state = {
            userDetails: {
                username: 'Dhinesh'
            }
        }
    }
    render() {
        const {userDetails} = this.state
        return (
            <Provider value={userDetails} >
                 <ConsumerC></ConsumerC>
            </Provider>
        )
    }
}

export default ProviderC;