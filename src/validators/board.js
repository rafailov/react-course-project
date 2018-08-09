import PropTypes from 'prop-types';

export const boardPropTypes = {
    fetchBoards: PropTypes.func.isRequired,
    boards: PropTypes.array,
    newBoard: PropTypes.object
};