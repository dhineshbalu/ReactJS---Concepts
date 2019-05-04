import React , { Component } from 'react'
import ChildRef from './ChildRef'

class Refs extends Component {
    constructor() {
        super()
        this.element = React.createRef()
        this.child = React.createRef()
    }
    render() {
        return (
            <div>
                 <h2 ref={this.element}>Helo I am refs</h2>
                 <ChildRef ref={this.child}></ChildRef>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.element)
        console.log(this.child.current.childMethod())
        console.log(this.child.current.state.name)
    }
}

export default Refs;