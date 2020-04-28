import React from 'react';
import './Tic-Tac-Toe.css';



class Square extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
	render() {
    return (
     /*<button className="square" onClick={function() { alert('click'); }}>  OR */
      <td className="square" onClick={() => this.setState({value: this.props.value})}>
        {this.state.value}
      </td>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
		<table className="buttons">
			<tr>
		        
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