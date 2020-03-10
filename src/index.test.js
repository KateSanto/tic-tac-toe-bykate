const findWinner = require("./index");

describe("findWinner", () => {
    test.only("This key function from this game takes the board as it is and says whether noughts or crosses have won", () => {
        const result = findWinner(["X", "O", "X", "X", "O", "O", "O", "X", "X"]);
        const expected = "X";
        expect(result).toBe(expected);
    })
})