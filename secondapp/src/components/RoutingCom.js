import React , { Component } from 'react'

class RoutingCom extends Component {
    constructor(props) {
        super(props)
        this.changeRouter = this.changeRouter.bind(this)
    }
    changeRouter() {
        this.props.history.push('/route2')
        console.log(this.props)
    }
    render() {
        return (
            <div>
                 <button onClick={this.changeRouter}>Change Router</button>
                Routing Component
             </div>
        )
    }
}
export default RoutingCom;