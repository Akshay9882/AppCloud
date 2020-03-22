// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import { refreshDataFromDB } from "../middleware/index";

function mapActionToDoForm(dispatch) {
  return {
    addTodo:   todo => dispatch(addTodo(todo)),
    fetchdata: dispatch(refreshDataFromDB()),
  };
}

class ConnectedToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addTodo({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Todo Title : </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <button type="submit">Add Todo</button>
        </div>
      </form>
    );
  }
}

const TodoForm = connect(
  null,
  mapActionToDoForm
)(ConnectedToDoForm);

export default TodoForm;