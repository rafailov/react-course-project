import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from './Cards';

class Boards extends Component {
    componentWillMount() {
        this.props.fetchBoards();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newBoard) {
            this.props.boards.push(nextProps.newBoard)
        }
    }

    render() {
        if (this.props.boards) {
            const boardsCount = this.props.boards.length;
            const boards = this.props.boards.map(board => (
                <div className={"col-md-" + 12 / boardsCount} key={board.id}>
                    <div >
                        <h2>{board.title}</h2>
                        <Cards cards={board.cards} />
                    </div>
                </div>
            ));

            return (
                <div>
                    <div className={"row"}>
                        {boards}
                    </div>
                </div>
            );
        }

        return (
            <div>
                Add your board now !
            </div>
        );
    }
}

Boards.propTypes = {
    fetchBoards: PropTypes.func.isRequired,
    boards: PropTypes.array,
    newBoard: PropTypes.object
};

const fetchBoards = () => dispatch => {
    const boards = [
        {id:1, title: 'TO DO', cards: [
            {id:1, title: 'Card 1', body: 'Card one body'},
            {id:2, title: 'Card 2', body: 'Card two body'}
        ]},
        {id:2, title: 'DONE', cards: []}
    ];
    dispatch({
        type: 'FETCH_BOARDS',
        payload: boards
    });
};

const mapStateToProps = state => ({
    boards: state.boards,
    newBoard: state.newBoard
});

export default connect(mapStateToProps, { fetchBoards })(Boards);
