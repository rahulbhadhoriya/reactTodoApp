import React, { Component } from 'react';
import TodolistItem from './TodolistItem';
class Todolist extends Component {
    constructor(props) {
        super(props)
    }
    complete = (e) => {
        this.props.onComplete(e);
    }
    render() {
        let createItem = (itemText, i) => {
            return (
                <TodolistItem key={i} value={i} onDone={this.complete}>{itemText}</TodolistItem>
            )
        }
        return (
            <ul className="TodoList list-unstyled">
                {this.props.items.map(createItem, this).reverse()}
            </ul>
        )
    }
}

export default Todolist;