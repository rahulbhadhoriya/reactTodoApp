import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.setState({
            item: ''
        });
        ReactDOM.findDOMNode(this.refs.item).focus();
        return;
    }
    onChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    render() {
        return (
            <div className="form-horizontal">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-xs-10">
                            <input type="text" className="form-control" ref='item' onChange={this.onChange} value={this.state.item} />
                        </div>
                        <div className="col-xs-2">
                            <button type="submit" className="btn btn-default round-button">
                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;