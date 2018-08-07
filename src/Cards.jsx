import React, { Component } from 'react';
import './index.css'

class Cards extends Component {
  render() {
      if (this.props.cards.length > 0) {
          const cards = (this.props.cards.map(card => (
              <div className={"card-item"} key={card.id}>
                  <h3>{card.title}</h3>
                  <span className={"float-right"}>X</span>
              </div>
          )));
          return (
              <div className={"card-items"}>
                  {cards}
              </div>
          );
      }
     return (
         <div className={"board"}>
             Add your first card
         </div>
     );
  }
}

export default Cards;
