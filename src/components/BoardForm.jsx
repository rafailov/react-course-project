import React, { Component } from 'react';
import '../index.css';

const initialState = {
    title: '',
    modalShown: false
};

class BoardForm extends Component {
    constructor(props){
        super(props);

        this.addBoard = this.addBoard.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.state = initialState;
    }

    addBoard(ev) {
        ev.preventDefault();

        this.props.createBoard({ title: this.state.title});

        this.setState(initialState);
    }

    handleChange({ target }) {
        let state = {};
        state[target.name] = target.value;

        this.setState(state);
    }

    showForm() {
        this.setState({
            modalShown: ! this.state.modalShown
        });
    }

    render() {
        return (
            <div>
                <button className={"btn btn-add-board"} onClick={this.showForm}>+</button>
                <form onSubmit={this.cardAdded} className={"card-form "  + (this.state.modalShown ? "shown" : "hidden")}>
                    <div className="row">
                        <div className="col-md-12">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className={"btn btn-add"} onClick={this.addBoard}>+</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default BoardForm;
