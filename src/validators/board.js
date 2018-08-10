import PropTypes from 'prop-types';

export const boardPropTypes = {
    fetchBoards: PropTypes.func.isRequired,
    boards: PropTypes.array,
    newBoard: PropTypes.object
};

export const createBoardValidation = (title) => {
    return (typeof title === 'string' && title.length > 2 && title.length < 100);
};