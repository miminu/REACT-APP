import React, { Component } from 'react';
import reservationCheck from './reservationCheck';
import { BrowserRouter,Route } from 'react-router-dom';
import sample from './sample';
import axios from 'axios';
import mReservation from './mReservation';
import mAccount from './mAccount';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={mReservation} />
        <Route path="/mAccount" component={mAccount} />
        <Route path="/sample" component={sample} />
        <Route path="/reservation" component={reservationCheck} />
    </BrowserRouter>
      /*<BrowserRouter>
        <Route exact path="/" component={reservationCheck} />
        <Route path="/sample" component={sample} />
    </BrowserRouter>*/
    );
  }
}

export default App;
