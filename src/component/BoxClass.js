import React, { Component } from 'react';

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = "";
    }
    getResult = () => {
        if(this.props.title === "Computer" &&
            this.props.result !== "tie" &&
            this.props.result !== "") {
            this.result = this.props.result === "win"? "lose": "win"; //컴퓨터 결과값이 유저와 반대로 나오게
        } else {
            this.result = this.props.result;
        }
    }

        
  render() {
    this.getResult();
    return (
    <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.item && this.props.item.name}</h2>
        <img src={this.props.item && this.props.item.img} className='item-img' alt=""/>
        <h2>{this.result}</h2>
      </div>
    )
  }
}