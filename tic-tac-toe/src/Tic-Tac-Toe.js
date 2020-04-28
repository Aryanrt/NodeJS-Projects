import React from 'react';
import './Tic-Tac-Toe.css';



class Square extends React.Component {
  
/*constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }*/
	render() {
    return (
     /*<button className="square" onClick={function() { this.props.onClick(); }}>  OR */
      <td className="square" onClick={() => this.props.onClick()}>
		
        {this.props.value}
      </td>
    );
  }
}

class Board extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
     xNext: true,
	 squares: Array(9).fill(null),
    };
  }

  handleClick(i)
  {
	//square already pressed!!!
	if( this.state.squares[i]==='X' ||this.state.squares[i]==='O' )
		return;
		
	this.state.squares[i] = this.state.xNext ? 'X' : 'O'; 
	this.setState({squares: this.state.squares, xNext: ! this.state.xNext,});  
  }
  renderSquare(i) {
   // return <Square value={i}/>;
  return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: '+( this.state.xNext? 'X': 'O');

    return (
      <div>
        <div className="status">{status}</div>
		<table className="buttons">
			<tr >		        
		          {this.renderSquare(0)}
		          {this.renderSquare(1)}
		          {this.renderSquare(2)}		        
			</tr>
			<tr>		        
		          {this.renderSquare(3)}
		          {this.renderSquare(4)}
		          {this.renderSquare(5)}		        
			</tr>
			<tr>		        
		          {this.renderSquare(6)}
		          {this.renderSquare(7)}
		          {this.renderSquare(8)}		        
			</tr>			
		</table>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

/*ReactDOM.render(
  <Game />,
  document.getElementById('game')
);
*/
export default Game;