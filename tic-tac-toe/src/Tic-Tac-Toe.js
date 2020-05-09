import React from 'react';
import ReactDOM from 'react-dom';
import './Tic-Tac-Toe.css';
import './App.css';



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
	 winner: null,
	 gameOver: false,
	 status:'Next : X',
    };
  this.newGame = this.newGame.bind(this)
  this.handleClick = this.handleClick.bind(this)
  this.props.onStatusChange('Next : X');
  
	
  }

  handleClick(i)
  {

	//square already pressed!!!
	if( this.state.squares[i]==='X' ||this.state.squares[i]==='O'  || this.state.winner != null)
		return;
	
	this.state.squares[i] = this.state.xNext ? 'X' : 'O'; 	
		
	

	if(this.state.squares[0]==this.state.squares[1] && this.state.squares[0]==this.state.squares[2] && this.state.squares[2] != null)
		this.state.winner = this.state.squares[0];
	else if(this.state.squares[3]==this.state.squares[4] && this.state.squares[3]==this.state.squares[5] && this.state.squares[3] != null)
		this.state.winner = this.state.squares[3];
	else if(this.state.squares[6]==this.state.squares[7] && this.state.squares[8]==this.state.squares[6] && this.state.squares[6] != null)
		this.state.winner = this.state.squares[6];
	else if(this.state.squares[0]==this.state.squares[3] && this.state.squares[0]==this.state.squares[6] && this.state.squares[0] != null)
		this.state.winner = this.state.squares[0];
	else if(this.state.squares[1]==this.state.squares[4] && this.state.squares[1]==this.state.squares[7] && this.state.squares[1] != null)
		this.state.winner = this.state.squares[1];
	else if(this.state.squares[2]==this.state.squares[5] && this.state.squares[2]==this.state.squares[8] && this.state.squares[2] != null)
		this.state.winner = this.state.squares[2];
	else if(this.state.squares[0]==this.state.squares[4] && this.state.squares[0]==this.state.squares[8] && this.state.squares[0] != null)
		this.state.winner = this.state.squares[0];
	else if(this.state.squares[2]==this.state.squares[4] && this.state.squares[2]==this.state.squares[6] && this.state.squares[2] != null)
		this.state.winner = this.state.squares[2];
	
	//Do we have a winner/game Over?
	for(let i = 0; i < 9; i++)
	{
		
		if(this.state.squares[i] == null )
		{
			this.state.gameOver = false;
			break;
		}
		
		this.state.gameOver = true;
	}
	
	if(this.state.winner != null)
		 var status = this.state.winner +' Congrats!';
	else if(this.state.gameOver)
		var status = 'No Winners!';
    else
		 var status = 'Next : '+( this.state.xNext? 'O': 'X');
	
		
	 	
	this.setState({status:status, xNext:!this.state.xNext});	 
	this.props.onStatusChange(status);
	
	
  }

  renderSquare(i) {
   // return <Square value={i}/>;
  	return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
  newGameButton() {  
	document.getElementById("logo").className= "App-logo-still";
  	return <button className="newGameButton" onClick={() => this.newGame()}> New Game </button>;

  }
  newGame()
  {
	this.state.xNext = true;
    for(let i =0; i < 9; i++)
		this.state.squares[i] = null;
	this.state.winner = null;
	this.state.gameOver= false;
	this.setState({xNext: true, winner: this.state.winner, squares:this.state.squares,status:'Next player X'}); 
	
	//change the speed of the logo
	document.getElementsByClassName("App-logo-still")[0].className= "App-logo";	 
	this.props.onStatusChange('Next X');
  }

  render() {

				
	

	
	//this.setState({status:status}); 
	//this.props.onStatusChange(status);

    return (
      <div>
        
		 { /*<div className="status" >{this.state.status}</div> */}
		<table className="buttons"  >
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
				<div className="newGameDiv">{(this.state.winner!= null || this.state.gameOver)? this.newGameButton(): ''}</div>		
      </div>
    );
  }
}

class Game extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
     status:null,
	 //status
    };
   this.handleStatusChange = this.handleStatusChange.bind(this)
	
  }
  handleStatusChange(data) {
    this.setState({status: data}); 

  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board onStatusChange={this.handleStatusChange} />
        </div>
        <div className="game-info">
          <div>{this.state.status}</div>
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