import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import Landing from './Components/Landing'
import About from './Components/About';
import Submit from './Components/Submit';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
         <Route exact path="/about" component={About}/>
         <Route exact path="/submit" component={Submit}/>
         <Route path="/" component={Landing}/>
       </Switch>
      </div>
    );
  }
}

export default withRouter(App);
