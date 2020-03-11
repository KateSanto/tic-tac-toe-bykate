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
    // [0, 1, 2],
    // [3, 4, 5],
    // [6, 7, 8],
    // [0, 3, 6],
    // [1, 4, 7],
    // [2, 5, 8],
    // [0, 4, 8],
    // [2, 4, 6],
}
module.exports = findWinner;