import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardPropTypes } from '../validators/card';
import '../index.css';
import CardForm from "./CardForm";
import { fetchCards, createCard } from '../actions/cardActions';

class Cards extends Component {
    componentWillMount() {
        this.props.fetchCards(this.props.boardId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newCard && ! this.props.cards.some(card => card.id === nextProps.newCard.id)) {
            this.props.cards.push(nextProps.newCard)
        }
    }

    render() {
      if (this.props.cards && this.props.cards.length > 0) {
          const boardId = this.props.boardId;
          const cards = (this.props.cards.filter(card => (card.boardId === boardId)).map(card => (
              <div className={"card-item"} key={card.id}>
                  <h3>{card.title}</h3>
                  <span className={"float-right"}>X</span>
              </div>
          )));
          return (
              <div className={"board-cards"}>
                  {cards}
                  <CardForm createCard={this.props.createCard} boardId={this.props.boardId}/>
              </div>
          );
      }
     return (
         <div className={"board"}>
             Add your first card
             <CardForm createCard={this.props.createCard} boardId={this.props.boardId}/>
         </div>
     );
  }
}
Cards.propTypes = cardPropTypes();

const mapStateToProps = state => ({
    cards: state.cards.all,
    newCard: state.cards.new
});

export default connect(mapStateToProps, { fetchCards, createCard })(Cards);
