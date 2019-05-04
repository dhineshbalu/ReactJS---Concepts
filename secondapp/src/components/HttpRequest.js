import React , { Component } from 'react'
import axios from 'axios'
import styles from '../styles/app.module.css'
import '../styles/app.css'
class HttpReqeust extends Component {
    constructor() {
       super()
       this.state = {
           persons: []
       }
    }
    componentDidMount() {
         axios.get('https://jsonplaceholder.typicode.com/users').then((res)=> {
             const persons = res.data
             this.setState({
                 persons
             })
         })
    } 
    render() {
        console.log(styles)
        return (
            <div>
                <ul>
                   { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
               </ul>
             </div>
        )
    }
}

export default HttpReqeust;