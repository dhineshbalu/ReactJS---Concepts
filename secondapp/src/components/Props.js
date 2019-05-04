import React , { Component } from 'react'

class Props extends Component {
    constructor(props) {
        super(props)
        this.changeName = this.changeName.bind(this)
    }
    changeName() {
        this.props.callBack('Dhinesh kumar')
    }
    render() {
        const { name } = this.props
        return (
            <div>
             <h2>Helo {name}</h2>
             <button onClick={this.changeName}>Change</button>
            </div>
        )
    }
}
export default Props;