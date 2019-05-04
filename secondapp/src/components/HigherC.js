import React , { Component } from 'react'
import Higher from './Higher'
class HigherC extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {count , callBack} = this.props
        return (
            <div>
                  {count}
                  <button onClick={callBack}>increment</button>
            </div>
        )
    }
}

export default Higher(HigherC);