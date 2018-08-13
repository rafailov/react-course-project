import React, { Component } from 'react';
import Card from '../components/Card';

export default class CardView extends Component {
    render() {
        return (
            <div>
                <Card cardId={this.props.match.params.id}/>
            </div>
        );
    }
}