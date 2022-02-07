import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Hey look at my portfolio",
      data: [
        {title: "McDounles"},
        {title: "Smiths"}, 
        {title: "Ace Hardwere"},
        {title: "City Hall"}
      ]
    };
  }



  PortfolioItem() {

    return this.state.data.map(item => {
      return <PortfolioItem  title={item.title} url={"google.com"} />;
    });
  }


  render() {
      return(
         <div>
             <h2>{this.state.pageTitle}</h2>

             {this.PortfolioItem()}
         </div> 
      );
  }
}