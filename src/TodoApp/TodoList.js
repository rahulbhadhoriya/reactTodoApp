import React, { Component } from 'react';
import TodolistItem from './TodolistItem';
class Todolist extends Component {
    constructor(props) {
        super(props)
    }
    Remove = (e) => {
        this.props.onDelete(e);
    }
    render() {
        let createItem = (itemText, i) => {
            return (
                <TodolistItem key={i} value={i} onRemove={this.Remove}>{itemText}</TodolistItem>
            )
        }
        return (
            <ul className="TodoList">
                {this.props.items.map(createItem, this).reverse()}
            </ul>
        )
    }
}

export default Todolist;