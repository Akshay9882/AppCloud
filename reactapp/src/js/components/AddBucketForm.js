// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addBucket } from "../actions/index";
import { refreshDataFromDB } from "../middleware/index";

function mapActionToForm(dispatch) {
  return {
    //boundActionCreators
    addbkt: buckets => dispatch(addBucket(buckets)),
    refreshDataFromDB
};
}

class ConnectedForm extends Component {
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
    this.props.addbkt({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Bucket Title : </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />        
        <button type="submit">Add bucket</button>
        </div>
      </form>
    );
  }
}

const BucketForm = connect(
  null,
  mapActionToForm
)(ConnectedForm);

export default BucketForm;