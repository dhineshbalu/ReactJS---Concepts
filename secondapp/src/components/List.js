import React , { Component } from 'react'

class List extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    id: 1,
                    name: 'Dhinesh'
                },
                {
                    id: 2,
                    name: 'Kumar'
                }
            ]
        }
    }
    render() {
        const {list} = this.state
        //method 1
        let element = list.map((l)=> {
            return (
                <div>
                    <li>{l.name}</li>
                </div>
            )
        })
        //method 2
        // return (
        //     <div>
        //         <ul>
        //          {
        //            list.map((l)=> {
        //              return (
        //             <div> 
        //                 <li>{l.name}</li>
        //             </div>
        //              )
        //            })
        //          }
        //           </ul>
        //     </div>
        // )
        return (
            <div>
                {element}
            </div>
        )
    }
}
export default List;