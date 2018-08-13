import { NEW_CARD, FETCH_CARDS, DELETE_CARD, GET_CARD } from '../actions/types';

export const fetchCards = (boardId) => dispatch => {
    const cards = [];
    dispatch({
        type: FETCH_CARDS,
        payload: cards
    });
};

export const getCard = (cardId, cards) => dispatch => {
    let card = cards.find((card) => (parseInt(cardId, 10) === card.id));
    if (! cards.length) {
        card = {
            id: 1,
            title: 'Create ReactJs Exam',
            deadline: '13.Aug.2018',
            creator: 'Denis',
            status: 'important',
            description: 'Create a Trello Board Like application. You don\'t need to hit the design right, just the functionality.',
            boardId: 1
        };
    }

    dispatch({
        type: GET_CARD,
        payload: card
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