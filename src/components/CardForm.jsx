import React, { Component } from 'react';
import { createCardValidation } from '../validators/card';
import '../index.css';

const initialState = {
    title: '',
    deadline: '',
    status: '',
    creator: '',
    description: '',
    formShown: false
};

class CardForm extends Component {
    constructor(props){
        super(props);

        this.addCard = this.addCard.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.state = initialState;
    }

    addCard(ev) {
        ev.preventDefault();

        if (! createCardValidation(this.state)) {
            return;
        }

        this.props.createCard({...this.state, boardId: this.props.boardId});

        this.setState(initialState);
    }

    handleChange({ target }) {
        let state = {};
        state[target.name] = target.value;

        this.setState(state);
    }

    showForm() {
        this.setState({
            formShown: ! this.state.formShown
        });
    }

    render() {
        return (
            <div>
                <a className={"arrow-icon " + (this.state.formShown ? "" : "closed")} onClick={this.showForm}>
                    <span className="left-bar"> </span>
                    <span className="right-bar"> </span>
                </a>
                <form onSubmit={this.cardAdded} className={"card-form "  + (this.state.formShown ? "shown" : "hidden")}>
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="deadline"
                                placeholder="Deadline"
                                className="form-control"
                                value={this.state.deadline}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <select name="status" className="form-control" onChange={this.handleChange}>
                                <option value="">Select Status...</option>
                                <option value="important">Important</option>
                                <option value="critical">Critical</option>
                                <option value="not-important">Not Important</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="creator"
                                placeholder="Author"
                                className="form-control"
                                value={this.state.creator}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea
                                rows="3"
                                name="description"
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.description}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className={"btn btn-add"} onClick={this.addCard}>+</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CardForm;
