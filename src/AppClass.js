import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
import "./App.css";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors", 
    img: "https://imageengine.victorinox.com/mediahub/31970/1280Wx1120H/CUT_8_0904_10__S1.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

export default class AppClass extends Component {
  constructor(){
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice();

    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice],  computerChoice)
    })
  }

  judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

/*
      user == computer  => tie

      user == "Rock", 
      computer == "Paper" => user lose
      computer == "Scissors" => user win
        

      user == "Scissors", 
      computer == "Paper" => user win
      computer == "Rock" => user lose 

      user == "Paper",
      computer == "Rock" => user win 
      computer == "Scissors" => user lose
    */
    if(user.name === computer.name) 
      return "tie"
    else if(user.name === "Rock") 
      return computer.name === "Scissors"? "win": "lose" 
    else if(user.name === "Scissors") 
      return computer.name === "Paper"? "win": "lose"
    else if(user.name === "Paper") 
      return computer.name === "Rock"? "win": "lose"
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);//객체에 키값만 뽑아서 배열로 만들어주는 함수
    console.log("itemsArray", itemArray);
    let randomItem = Math.floor(Math.random()* itemArray.length);    
    console.log("randomItem", randomItem);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  };
 
  render() {
    
    return (
      
      <div>
        <div className="main">
        <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
        <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
      </div>
      <div className="main">
        <button onClick={() => this.play("scissors")}>가위</button>
        <button onClick={() => this.play("rock")}>바위</button>
        <button onClick={() => this.play("paper")}>보</button>
      </div>
      </div>
    )
  }
}
