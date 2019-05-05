import React , { Component }from 'react';
import Props from './components/Props'
import Condition from './components/Condition'
import List from './components/List'
import Forms from './components/Forms'
import Fragment from './components/Fragment'
import Refs from './components/Refs'
import HigherC from './components/HigherC'
import ProviderC from './components/ProviderC'
import Portal from './components/Portal'
import HttpRequest from './components/HttpRequest'
import Styles from './components/styles'
import Redux from './components/Redux'
import RoutingCom from './components/RoutingCom'
import { BrowserRouter , Switch , Route , Link } from 'react-router-dom'
class App extends Component {
 constructor() {
   super()
   this.state = {
     name: 'Dhinesh'
   }
   this.parentMethod = this.parentMethod.bind(this)
 }
 parentMethod(data) {
   this.setState({
     name: data
   })
 }
 render() {
   const {name} = this.state
   return (
     <div>
       {/* <Props name={name} callBack={this.parentMethod}>
       </Props> */}
       {/* <Condition></Condition> */}
       {/* <List></List> */}
       {/* <Forms></Forms> */}
       {/* <Fragment></Fragment> */}
       {/* <Refs></Refs> */}
       {/* <HigherC></HigherC> */}
       {/* <ProviderC></ProviderC> */}
       {/* <Portal></Portal> */}
       {/* <HttpRequest></HttpRequest> */}
       {/* <Styles></Styles> */}
       {/* <Redux></Redux> */}
         <BrowserRouter>
              <Route path="/route1" component={RoutingCom}></Route>
               <Route path="/route2" component={Condition}></Route>
         </BrowserRouter>
     </div>
   )
 }
}

export default App;
