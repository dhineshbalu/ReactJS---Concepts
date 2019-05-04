import React , { Component } from 'react'
import styles from '../styles/app.module.css'
import '../styles/app.css'

const green = {
    color: 'green'
}
class Styles extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                 <h2 class="success">helo</h2>
                 <h3 class={styles.success}>Dhinesh</h3>
                 <h4 style={green}>Kumar</h4>
            </div>
        )
    }
}
export default Styles;