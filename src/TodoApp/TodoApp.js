import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }
    getInitialState = () => {
        const initialState = {
            items: [],
            completedItems: []
        }
        return initialState;
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

    resetForm = () => {
        localStorage.removeItem('items');
        localStorage.removeItem('completedItems');
        this.setState(this.getInitialState())
    }
    //lifeCycle hooks
    componentWillMount() {
        let _items = localStorage.getItem('items');
        let _completedItems = localStorage.getItem('completedItems');

        _items && this.setState({
            items: JSON.parse(_items),
            completedItems: JSON.parse(_completedItems)
        })
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('items', JSON.stringify(nextState.items));
        localStorage.setItem('completedItems', JSON.stringify(nextState.completedItems));

    }

    createTasks(i, index) {
        return <div className="active-list" key={index}>{i.item}</div>
    }
    render() {
        let todoEntries = this.state.completedItems;
        let listItems = todoEntries.map(this.createTasks)
        return (
            <div className="">
                <div className="row header-section">
                    <div className="col-xs-10"><h4>React To Do App..</h4></div>
                    <div className="col-xs-2">
                        <button type="button" className="btn btn-primary round-button" onClick={this.resetForm}>
                            <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <div className="body-section row">
                    {/* <div className="col-xs-12 search-bar">
                        <div className="form-horizontal row">
                            <div className="col-xs-8">
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-xs-4">
                                <button className="btn btn-default"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-xs-12">
                        <TodoForm className="form-control" onFormSubmit={this.updateItems} />

                        <TodoList items={this.state.items} onComplete={this.handleClick} />
                        {listItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoApp;