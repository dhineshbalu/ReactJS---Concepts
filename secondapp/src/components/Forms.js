import React , { Component } from 'react'

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }
   changeUsername(event) {
      this.setState({
          username: event.target.value
      })
   }
   formSubmit(event) {
       event.preventDefault()
       console.log(this.state.username)
   }
    render() {
        let {username} = this.state
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                     <input name="username" value={username} onChange={this.changeUsername}/>
                     <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default Forms;