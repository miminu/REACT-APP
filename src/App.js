import React, { Component } from 'react';
import reservationCheck from './reservationCheck';
import { BrowserRouter,Route } from 'react-router-dom';
import sample from './sample.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello : [],
    }
  }

  componentDidMount() {
    this._getHello();
  }

  _getHello = async() => {
    const res = await axios.get('/hello');
    this.setState({ hello : res.data.hello })
    console.log(this.state.hello);
  }

  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={reservationCheck} />
        <Route path="/sample" component={sample} />
    </BrowserRouter>
    /*<>
        <h3>get DB data(브라우저 개발모드 콘솔확인)</h3>
      </>*/
    );
  }
}

export default App;
