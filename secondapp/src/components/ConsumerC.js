import React , { Component } from 'react'
import { Consumer } from './context'
class ConsumerC extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <Consumer>
                {
                    (userDetails) => {
                        return (
                            <div>
                                {userDetails.username}
                             </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default ConsumerC;