import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { item: 'BreakFast', isDone: false },
                { item: 'Lunch', isDone: true }
            ],
            completedItems: []
        }

    }
    updateItems = (newItem) => {
        if (newItem) {
            let item = { item: newItem, isDone: false };
            let allItems = this.state.items.concat([item]);
            this.setState({
                items: allItems
            });
        }
    }

    handleClick = (index) => {
        let newData = this.state.items.slice();
        let newcompletedItems = this.state.completedItems.slice();
        let getItem = this.state.items[index];
        newData.splice(index, 1);
        //push in different array;
        newcompletedItems.push(getItem);
        this.setState({
            items: newData,
            completedItems: newcompletedItems
        });
    }
    createTasks(i, index) {
        return <li
            key={index}>{i.item}</li>
    }
    render() {
        let todoEntries = this.state.completedItems;
        let listItems = todoEntries.map(this.createTasks)
        return (
            <div className="TodoApp">
                <TodoBanner />
                <TodoForm onFormSubmit={this.updateItems} />
                <TodoList items={this.state.items} onDelete={this.handleClick} />
                {listItems}
            </div>
        )
    }
}

export default TodoApp;