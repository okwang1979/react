import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PostList from './basecomponent/PostList'

// class Square extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null, disname: null,

//     };
//   }
//   render() {
//     return (
//       <button className="square" onClick=
//         {() => {
//           this.setState({ value: 'X' });
//           this.props.onClick();
//         }}>
//         { this.props.value}
//       </button>
//     );
//   }
// }

function Square(props){
  return (
     <button className="square" onClick={props.onClick}>{props.value}</button>
   );
}


class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}/>;
  }

  render() {


    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
         
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      history:[{ squares:Array(9).fill(null),}],
      xIsNext :true,
  };
  }

  getCurrentSquares(){
    return this.state.history[this.state.history.length-1].squares.slice();
  }

  handlerCheck(i){
  
    const squares = this.getCurrentSquares().slice();
    if(calculateWinner(squares)!=null|| squares[i]!=null){
      return;
    }
    const history = this.state.history;
    squares[i] = this.state.xIsNext?'X':"O";
    const xIsNext = !this.state.xIsNext;
 
    var ddd=1;
    console.log(global.ddd);

    this.setState({history:history.concat([{squares:squares}])});
     
    this.setState({xIsNext:xIsNext});

  }
  render() {
    const winner = calculateWinner(this.getCurrentSquares());
    let status;
    if(winner!=null){
      status = 'Winner is：'+(winner);
    }else{
      status = 'Next player: '+(this.state.xIsNext?'X':'O');
    }
     
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.getCurrentSquares()} onClick={(i)=>{this.handlerCheck(i)}} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div><PostList/></div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
