import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  Constructor() {
    console.log("Portfolio container hes rendered");
  }



  PortfolioItem() {
    const data = ["McDounles","Smiths","Ace Hardwere","City Hall"];

    return data.map(item => {
      return <PortfolioItem  title={item} url={"google.com"} />;
    })
  }


  render() {
      return(
         <div>
             <h2>Portfolio items go here...</h2>

             {this.PortfolioItem()}
         </div> 
      );
  }
}