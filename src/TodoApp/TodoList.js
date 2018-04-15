import React, { Component } from 'react';
import TodolistItem from './TodolistItem';
class Todolist extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let createItem = (itemText) => {
            return (
                <TodolistItem>{itemText}</TodolistItem>
            )
        }
        return (
            <ul className="TodoList">
                {this.props.items.map(createItem)}
            </ul>
        )
    }
}

export default Todolist;