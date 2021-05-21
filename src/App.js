import React, { Component } from 'react';
import reservationCheck from './reservationCheck';
import { BrowserRouter,Route } from 'react-router-dom';
import sample from './sample.js';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={reservationCheck} />
        <Route path="/sample" component={sample} />
    </BrowserRouter>
    );
  }
}

export default App;
