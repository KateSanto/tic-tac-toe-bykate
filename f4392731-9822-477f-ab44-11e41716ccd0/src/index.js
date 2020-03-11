import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import findWinner from './findWinner';

function Square(props) {
    return (
        <button className="box" onClick={props.onClick}>
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
        let status;
        let completedSquares = this.state.squares.filter(square => square !== null)
        if (winner) {
            status = 'The winner is ' + winner
        } else if (completedSquares.length === 9 && !winner) {
            status = "It's a tie!"
        }
        else if (!winner) {
            status = (this.state.xIsNext ? 'X' : 'O') + ', your turn'
        }
        return (
            <div className="container text-center">
                <div className="title"><h1>Tic Tac Toe</h1></div>

                <div className="status">{status}</div>
                <div className="board">
                    <div className="row no-gutters">
                        <div className="col-4 square">
                            {this.renderSquare(0)}</div>
                        <div className="col-4 square">
                            {this.renderSquare(1)}</div>
                        <div className="col-4 square">
                            {this.renderSquare(2)}</div>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-4 square">
                            {this.renderSquare(3)}</div>
                        <div className="col-4 square">
                            {this.renderSquare(4)}</div>
                        <div className="col-4 square">
                            {this.renderSquare(5)}</div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-4 square">
                            {this.renderSquare(6)}</div>
                        <div className="col-4 square">
                            {this.renderSquare(7)}</div>
                        <div className="col-4 square">
                            {this.renderSquare(8)}</div>
                    </div>
                </div>
                <div className="restart text-center">
                    <button type="button" className="btn btn-light btn-lg" onClick={this.clearBoard}>Restart</button>
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

export default Game

//==================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


