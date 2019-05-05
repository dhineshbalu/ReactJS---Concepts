import React , { Component } from 'react'
import { connect } from 'react-redux';
class Redux extends React.Component {
 
    render() {
        console.log(this.props)
        return (
            <div>
               <h1>{this.props.user.username}</h1> 
               <button onClick={() => this.props.setName('kumar')}>change</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
   return {
       user:state.user,
       design: state.design
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
       setName: (name) => {
           dispatch({
               type:'username',
               payload:name
           })
       }
   }
}

// const mapDispatchToProps = (actions) => {
// }

export default connect(mapStateToProps,mapDispatchToProps)(Redux)