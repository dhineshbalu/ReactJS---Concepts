import React , { Component } from 'react'

class ChildRef extends Component {
    constructor() {
        super()
        this.state = {
            name: 'ChildMethod'
        }
        this.childMethod = this.childMethod.bind(this)
    }
    childMethod() {
        console.log('child method called')
    }
    render() {
        return (
          <div>

          </div>
        )
    }
}
export default ChildRef;