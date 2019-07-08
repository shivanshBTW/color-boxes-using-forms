import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './Box.css';
export default class Box extends Component {
  static defaultProps = {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    id: uuid()
  };
  //   handleDelete(evt) {
  //     console.log(evt.target.parentNode.firstChild.name);
  //     // <th></th>is.props.deleteBox();
  //   }
  render() {
    // let uuid = uuid();
    let boxStyle = {
      height: this.props.height,
      width: this.props.width,
      backgroundColor: this.props.backgroundColor
    };
    return <div className="Box" style={boxStyle} name={this.props.id} key={this.props.id} />;
  }
}
