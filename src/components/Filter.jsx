import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterPropTypes } from '../validators/filter';
import { filterCards } from '../actions/filterActions';
import '../index.css';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    handleChange({ target }) {
        this.props.filterCards(target.value);
    }

    clearFilter() {
        this.props.filterCards('');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3 filter">
                    <input
                        className="float-right form-control"
                        type="filter"
                        value={this.props.filter}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-warning" onClick={this.clearFilter}>
                        clear
                    </button>
                </div>
            </div>
        );
    }
}

Filter.propTypes = filterPropTypes;

const mapStateToProps = (state) => ({
    filter: state.filter.title,
    boards: state.boards.all
});

export default connect(mapStateToProps, { filterCards })(Filter);
