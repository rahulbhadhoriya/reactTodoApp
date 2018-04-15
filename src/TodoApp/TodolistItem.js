import React, { Component } from 'react';

class TodolistItem extends Component {
    constructor(props) {
        super(props)
    }
    changeHandler = (e) => {
        this.setState({
            value: e.target.checked
        });
        this.props.children.isDone = e.target.checked;
    }
    CompleteHandler = () => {
        this.props.onDone(this.props.value);
    }
    render() {
        let _style = "line-through";
        if (!this.props.children.isDone)
            _style = "none";
        return (
            <li data-id={this.props.value}
                key={this.props.value} onClick={this.CompleteHandler}>
                {/* first tried to give checkbox functionality was working fine. */}
                {/* <button type="button" className="close pull-right" aria-hidden="true" >
                    &times;</button> */}
                {/* <input type="checkbox" onChange={this.changeHandler} defaultChecked={this.props.children.isDone}  /> */}
                <span style={{ "textDecoration": _style }}>{this.props.children.item}</span></li>

        );
    }
}

export default TodolistItem;