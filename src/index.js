import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        //Using .slice to make a copy of squares, instead of modifying original array. Allows me to reuse the original value of squares elsewhere
        const squares = this.state.squares.slice();
        if (findWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ squares: squares, xIsNext: !this.state.xIsNext, });
    }

    clearBoard = () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        })
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
        );
    }



    render() {
        const winner = findWinner(this.state.squares);
        console.log(this.state.squares[0]);
        let status;
        let squares = this.state.squares;
        let isSquareEmpty = (squares) => squares[''] !== null;

        if (winner) {
            status = 'The winner is ' + winner
        } else if (!winner) {
            status = (this.state.xIsNext ? 'X' : 'O') + ', your turn'
        } else if (this.state.squares.every(isSquareEmpty) && !winner) {
            status = "It's a tie!"
        }

        return (
            <div>
                <h1>Tic Tac Toe</h1>

                <div className="status">{status}</div>
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
                <div className="col-6 restart">
                    <button type="button" className="btn btn-success" onClick={this.clearBoard}>Restart</button>
                </div>
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
                    <div>{/*status */}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        );
    }
}

export default Game;

//==================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);




function findWinner(squares) {
    if (squares === undefined) throw new Error("Please make a move");
    if (squares[0] === squares[1] && squares[0] === squares[2]) {
        return squares[0];
    } else if (squares[3] === squares[4] && squares[3] === squares[5]) {
        return squares[3];
    } else if (squares[6] === squares[7] && squares[6] === squares[8]) {
        return squares[6];
    } else if (squares[0] === squares[3] && squares[0] === squares[6]) {
        return squares[0];
    } else if (squares[1] === squares[4] && squares[1] === squares[7]) {
        return squares[1];
    } else if (squares[2] === squares[5] && squares[2] === squares[8]) {
        return squares[2];
    } else if (squares[0] === squares[4] && squares[0] === squares[8]) {
        return squares[0];
    } else if (squares[2] === squares[4] && squares[2] === squares[6]) {
        return squares[2];
    } else {
        return null;
    }

    //WINNING COMBINATIONS
    //     [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6],
}