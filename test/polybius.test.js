// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {

    it("should encode a message", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });
    it("should decode a message", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    });
    it("should return false if code is invalid", () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.eql(expected);
    })
    it("should translate the letters i and j to 42 when enconding", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });
    it("should translate 42 to i/j when decoding", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces in the message", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });
})