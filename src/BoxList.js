import React, { Component } from 'react';
import Box from './Box';
import Form from './Form';
import uuid from 'uuid/v4';
import './Box.css';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          height: 100,
          width: 100,
          backgroundColor: 'red',
          id: uuid()
        }
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(box) {
    this.setState({ boxes: [...this.state.boxes, box] });
  }
  deleteItem(evt) {
    var targetId = evt.target.name;
    // console.log(targetId);
    this.setState({
      boxes: this.state.boxes.filter(box => {
        if (box.id !== targetId) {
          return box;
        } else {
          return undefined;
        }
      })
    });
  }
  render() {
    return (
      <div>
        <Form addItem={this.addItem} />
        {this.state.boxes.map(box => {
          return (
            <div key={box.id}>
              <Box
                height={parseInt(box.height)}
                width={parseInt(box.width)}
                backgroundColor={box.backgroundColor}
              />
              <button className="Box" name={box.id} onClick={this.deleteItem}>
                Delete Box
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
