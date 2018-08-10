import { NEW_CARD, FETCH_CARDS, DELETE_CARD } from '../actions/types';

export const fetchCards = (boardId) => dispatch => {
    const cards = [];
    dispatch({
        type: FETCH_CARDS,
        payload: cards
    });
};

export const createCard = (card) => dispatch => {
    card.id = new Date().getTime();
    dispatch({
        type: NEW_CARD,
        payload: card
    });
};

export const deleteCard = (card) => dispatch => {
    dispatch({
        type: DELETE_CARD,
        payload: card
    });
};