import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import profile from '../src/img/team1.png'
import code from '../src/img/code.png'


class Card extends React.Component {
  render() {    
    return (
      <div className="card">
        <Username/>
        <Image/>        
        <Status/>
        <Comment/>
      </div>
    );
  }
}

class Username extends React.Component {
  render(){
    return(
      <div className="username">
        <img src={profile}></img>
        <p>Sudhanshu Singh</p>
      </div>
    )
  }
}
class Image extends React.Component {
  render(){
    return(
      <img className="postImage" src={code}></img>
    )
  }
}
class Status extends React.Component {
  render(){
    return(
      <div className="status">  
        <div className="like">
        <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Heart-128.png"></img>
        <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Chat_bubble-128.png"></img>
        </div>
        
        <div><b>Sudhanshu Singh</b> Let's code in React</div>
        
      </div>
    )
  }
}
class Comment extends React.Component {
  render(){    
    return(
      <div className="commentInput">
        <textarea placeholder="Add a comment…"></textarea>
        <img src="https://i.stack.imgur.com/twIm6.png"></img>
      </div>
    )
  }
}




ReactDOM.render(<Card />, document.getElementById("socialpost"));