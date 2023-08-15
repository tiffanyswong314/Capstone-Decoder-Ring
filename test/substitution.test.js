// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

//substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik")

describe("substitution", () => {

    it("should encode a message", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.eql(expected);
    });
    
    it("should decode a message", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    });

    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.eql(expected);
    });

    it("should correctly translates the given phrase, based on the alphabet given to the function", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    });

    it("should returns false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.eql(expected);
    });

    it("should maintain spaces in the message before and after encoding or decoding", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    });

})

