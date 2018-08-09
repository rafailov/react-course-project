import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cards from './Cards';
import BoardForm from "./BoardForm";

class Boards extends Component {
    constructor(props) {
        super(props);

        this.columnSize = this.columnSize.bind(this);
    }

    componentWillMount() {
        this.props.fetchBoards();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newBoard) {
            this.props.boards.push(nextProps.newBoard)
        }
    }

    columnSize() {
        const boardsCount = this.props.boards.length + 1;

        return Math.round(12 / boardsCount);
    }

    render() {
        if (this.props.boards) {
            const boards = this.props.boards.map(board => (
                <div className={"board col-md-" + this.columnSize()} key={board.id}>
                    <div >
                        <h2>{board.title}</h2>
                        <Cards boardId={board.id} />
                    </div>
                </div>
            ));

            return (
                <div>
                    <div className={"row"}>
                        {boards}
                        <div className={"col-md-" + this.columnSize()}>
                            <BoardForm createBoard={this.props.createBoard}/>
                        </div>
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
        {id:1, title: 'TO DO'},
        {id:2, title: 'DONE'}
    ];
    dispatch({
        type: 'FETCH_BOARDS',
        payload: boards
    });
};

const createBoard = (board) => dispatch => {
    board.id = new Date().getTime();
    dispatch({
        type: 'NEW_BOARD',
        payload: board
    });
};

const mapStateToProps = state => ({
    boards: state.boards,
    newBoard: state.newBoard
});

export default connect(mapStateToProps, { fetchBoards, createBoard })(Boards);
