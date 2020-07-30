import React, { Component } from 'react';

import {Switch} from 'react-router-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Pages/homePage';
import AllTenders from './Pages/allTenders';
import ApplyTender from './Pages/applyTender';
import Header from './Components/headerComponent';

export default class App extends Component{

  state = {
    // token:"Hello",
  }

  render(){
    return (
      <div>
        
        <BrowserRouter>
            <Header/>
            
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/allTenders" component={AllTenders}/>
              <Route path="/applyTender" component={ApplyTender}/>
              <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}