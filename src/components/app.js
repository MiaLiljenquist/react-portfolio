import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mia Liljenquist</h1>
        <h2>This is my react page.</h2>
        <div>
          {moment().format('MMMM Do YYYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
