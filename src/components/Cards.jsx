import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardPropTypes } from '../validators/card';
import CardForm from './CardForm';
import { fetchCards, createCard, deleteCard } from '../actions/cardActions';
import '../index.css';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.removeCard = this.removeCard.bind(this);
    }

    componentWillMount() {
        this.props.fetchCards(this.props.boardId);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newCard && ! this.props.cards.some(card => card.id === nextProps.newCard.id)) {
            this.props.cards.push(nextProps.newCard)
        }
    }

    removeCard({ target }) {
        this.props.deleteCard(target.getAttribute('data-card-id'));
    }

    render() {
      if (this.props.cards && this.props.cards.length > 0) {
          const boardId = this.props.boardId;
          const cards = (this.props.cards
              .filter(card => (card.boardId === boardId && card.title.toLowerCase().includes(this.props.filter)))
              .map(card => (
                  <div className={"card-item"} key={card.id}>
                      <h3>{card.title}</h3>
                      <span
                          className={"btn-delete-card float-right"}
                          onClick={this.removeCard}
                          data-card-id={card.id}
                      >X</span>
                  </div>
              ))
          );
          return (
              <div className={"board-cards"}>
                  {cards}
                  <CardForm createCard={this.props.createCard} boardId={this.props.boardId}/>
              </div>
          );
      }
     return (
         <div className={"board-cards"}>
             Add your first card
             <CardForm createCard={this.props.createCard} boardId={this.props.boardId}/>
         </div>
     );
  }
}

Cards.propTypes = cardPropTypes;

const mapStateToProps = state => ({
    cards: state.cards.all,
    newCard: state.cards.new,
    filter: state.filter.title
});

export default connect(mapStateToProps, { fetchCards, createCard, deleteCard })(Cards);
