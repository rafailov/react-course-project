import PropTypes from 'prop-types';

export const cardPropTypes = {
    fetchCards: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired,
    cards: PropTypes.array,
    newCard: PropTypes.object,
    boardId: PropTypes.number.isRequired
};

export const createCardValidation = (card) => {
    return (typeof card.title === 'string' && card.title.length > 2 && card.title.length < 50);
};