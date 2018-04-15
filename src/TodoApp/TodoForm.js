import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);
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
        let styles = {
            "float": "left",
            "marginLeft": "5px"
        }
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-10">
                        <input type="text" className="TodoField form-control" ref='item' onChange={this.onChange} value={this.state.item} />
                        <input type="submit" className="btn btn-default" style={styles} value='Add' />
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;