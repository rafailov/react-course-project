import PropTypes from 'prop-types';

export const cardPropTypes = () =>  {
    return {
        fetchCards: PropTypes.func.isRequired,
        createCard: PropTypes.func.isRequired,
        cards: PropTypes.array,
        newCard: PropTypes.object,
        boardId: PropTypes.number.isRequired
    }
};