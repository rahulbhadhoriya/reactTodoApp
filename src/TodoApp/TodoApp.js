import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }

    }
    updateItems = (newItem) => {
        let allItems = this.state.items.concat([newItem]);
        this.setState({
            items: allItems
        });
    }
    render() {
        return (
            <div className="TodoApp">
                <TodoBanner />
                <TodoForm onFormSubmit={this.updateItems} />
                <TodoList items={this.state.items} />
            </div>
        )
    }
}

export default TodoApp;