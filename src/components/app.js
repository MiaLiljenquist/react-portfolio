import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './Portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mia Liljenquist</h1>
        <PortfolioContainer />
        <div>
          {moment().format('MMMM Do YYYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
