import React , { Component } from 'react'

class Condition extends Component {
    constructor() {
        super()
        this.state = {
            flag: false
        }
    }
    render() {
             //method 1
            // if (this.state.flag) {
            //     return (
            //          <div>
            //              <h2>Flag is true</h2> 
            //          </div>
            //     )
            // } else {
            //     return (
            //         <div>
            //              <h2>Flag is false</h2>
            //         </div>
            //     )
            // }
            //method 2
        // let elements 
        // if (this.state.flag) {
        //     elements = (
        //         <div>
        //             <h2>Flag is true</h2>
        //         </div>
        //     )
        // } else {
        //     elements = (
        //         <div>
        //             <h2>Flag is false</h2>
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //           {elements}
        //     </div>
        // )

        //method 3
        return (
            this.state.flag ? (
                <div>
                   Flag is true
                 </div>
            ) : (
                <div>
                     Flag is false
                </div>
            )
        )
    }
}

export default Condition;