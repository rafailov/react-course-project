import React, { Component } from 'react';

class CardForm extends Component {
    constructor(props){
        super(props);

        this.addCard = this.addCard.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            cardName: ''
        };
    }

    addCard(ev) {
        ev.preventDefault();

        this.props.createCard({
            title: this.state.cardName,
            body: "my card body",
            somethingElse: "option",
            boardId: this.props.boardId
        });
    }

    handleChange({ target }) {
        this.setState({
            cardName: target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.cardAdded}>
                <div className={"row"}>
                    <div className={"col-md-8"}>
                        <input type="text" value={this.state.cardName} onChange={this.handleChange}/>
                    </div>
                    <div className={"col-md-4"}>
                        <button className={"btn btn-success"} onClick={this.addCard}>+</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default CardForm;
