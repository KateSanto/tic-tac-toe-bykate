const findWinner = require("./findWinner");

describe("findWinner", () => {
    test("This key function from this game takes the board as it is and says whether noughts or crosses have won", () => {
        const result = findWinner(["X", "O", "X", null, "O", "X", null, "O", null]);
        const expected = "O";
        expect(result).toBe(expected);
    })

    test("Returns null if there's no winner", () => {
        const result = findWinner(["X", "O", "X", "X", "O", "O", "O", "X", "X"]);
        const expected = null;
        expect(result).toBe(expected);
    })

    test("Returns null if wrong string provided", () => {
        const result = findWinner(["W", "O", "X", "X", "O", "O", "O", "X", "X"]);
        const expected = null;
        expect(result).toBe(expected);
    })
})