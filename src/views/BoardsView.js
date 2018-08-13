import React, { Component } from 'react';
import Boards from '../components/Boards';
import Filter from '../components/Filter';

export default class BoardsView extends Component {
    render() {
        return (
            <div>
                <Filter />
                <Boards />
            </div>
        );
    }
}