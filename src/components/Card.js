import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCard } from '../actions/cardActions';

class Card extends Component {

    componentWillMount() {
        this.props.getCard(this.props.cardId, this.props.cards);
    }

    render() {
        const backButton = (<Link to={'/'}><button className='btn btn-warning'>BACK</button></Link>);
        if (this.props.card !== undefined) {
            return (
                <div>
                    {backButton}
                    <h1>{this.props.card.title}</h1>
                    <span className='card-component'>Creator: {this.props.card.creator}</span>
                    <span className='card-component'>Deadline: {this.props.card.deadline}</span>
                    <span className='card-component'>Statue: {this.props.card.status}</span>
                    <p>{this.props.card.description}</p>
                </div>
            );
        }

        return <div>
            {backButton}
        </div>;
    }
}

const mapStateToProps = state => ({
    cards: state.cards.all,
    card: state.cards.current,
    filter: state.filter.title
});

export default connect(mapStateToProps, { getCard })(Card);