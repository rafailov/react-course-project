import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import BoardForm from './BoardForm';
import { boardPropTypes } from '../validators/board';
import { fetchBoards, createBoard, deleteBoard } from '../actions/boardActions';

class Boards extends Component {
    constructor(props) {
        super(props);

        this.columnSize = this.columnSize.bind(this);
        this.removeBoard = this.removeBoard.bind(this);
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

    removeBoard({ target }) {
        this.props.deleteBoard(target.getAttribute('data-board-id'));
    }

    render() {
        if (this.props.boards) {
            const boards = this.props.boards.map(board => (
                <div className={"board col-md-" + this.columnSize()} key={board.id}>
                    <div >
                        <h2>{board.title}</h2>
                        <span
                            className="float-right btn-delete-article"
                            onClick={this.removeBoard}
                            data-board-id={board.id}
                        >X</span>
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

Boards.propTypes = boardPropTypes;

const mapStateToProps = state => ({
    boards: state.boards.all,
    newBoard: state.boards.new
});

export default connect(mapStateToProps, { fetchBoards, createBoard, deleteBoard })(Boards);
