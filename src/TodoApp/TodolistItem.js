import React, { Component } from 'react';

class TodolistItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li id={this.props.value} key={this.props.value}>
                {this.props.children}
            </li>
        )
    }
}

export default TodolistItem;