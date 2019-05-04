import React , { Component } from 'react'

 const Higher = function(OriginalComponent) {
     return class NewClass extends Component {
         constructor() {
             super()
             this.state = {
                 count: 0
             }
             this.incrementCount = this.incrementCount.bind(this)
          }
            incrementCount() {
                 this.setState({
                     count: this.state.count + 1
                 })
             }
             render() {
                 return (
                    <div>
                        <OriginalComponent count={this.state.count} callBack={this.incrementCount}></OriginalComponent>
                    </div>
                 )
             }
         }
}

 export default Higher;