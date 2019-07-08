import React, { Component } from 'react';
// import Box from './Box';
import uuid from 'uuid/v4';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { height: '', width: '', backgroundColor: '', id: uuid() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ height: '', width: '', backgroundColor: '', id: uuid() });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height</label>
          <input
            type="number"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            id=""
            placeholder="height"
          />
          <label htmlFor="width">Width</label>
          <input
            type="number"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
            id=""
            placeholder="width"
          />
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            type="text"
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
            id=""
            placeholder="backgroundColor"
          />
          <button>Add Box</button>
        </form>
      </div>
    );
  }
}
