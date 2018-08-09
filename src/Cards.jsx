import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';
import CardForm from "./CardForm";

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

Cards.propTypes = {
    fetchCards: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired,
    cards: PropTypes.array,
    newCard: PropTypes.object,
    boardId: PropTypes.number.isRequired
};

const fetchCards = (boardId) => dispatch => {
    const cards = [
        {id:1, title: 'Card 1', body: 'Card one body', boardId: 1},
        {id:2, title: 'Card 2', body: 'Card two body', boardId: 2},
        {id:1, title: 'Card 1', body: 'Card one body', boardId: 2},
        {id:2, title: 'Card 2', body: 'Card two body', boardId: 1}
    ];
    dispatch({
        type: 'FETCH_CARDS',
        payload: cards
    });
};

const createCard = (card) => dispatch => {
    card.id = new Date().getTime();
    dispatch({
        type: 'NEW_CARD',
        payload: card
    });
};

const mapStateToProps = state => ({
    cards: state.cards,
    newCard: state.newCard
});

export default connect(mapStateToProps, { fetchCards, createCard })(Cards);
