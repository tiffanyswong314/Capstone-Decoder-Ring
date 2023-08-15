// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

// example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"

describe("caesar", () => {
    
    it("should encode a message", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected);
    });
    it("should decode a message", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.eql(expected);
    });
    it("should returns false if the shift value is equal to 0", () => {
        const actual = caesar("thinkful", 0);
        const expected = false;
        expect(actual).to.eql(expected);
    });

    it("should returns false if the shift value is less than -25", () => {
        const actual = caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should returns false if the shift value is greater than 25", () => {
        const actual = caesar("thinkful", 99);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should returns false if the shift value is not present", () => {
        const actual = caesar("thinkful");
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const actual = caesar("Zebra Magazine", 3);
        const expected = "cheud pdjdclqh";
        expect(actual).to.eql(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const actual = caesar("Zebra Magazine", 3);
        const expected = "cheud pdjdclqh";
        expect(actual).to.eql(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols", () => {
        const actual = caesar("Zebra Magazine!", 3);
        const expected = "cheud pdjdclqh!";
        expect(actual).to.eql(expected);
    });

});