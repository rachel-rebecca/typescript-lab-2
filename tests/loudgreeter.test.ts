import LoudGreeter from "../src/loudgreeter";

describe("LoudGreeter tests", () => {
    // Act
    let test5 = new LoudGreeter("HEY");
    let test6 = new LoudGreeter("Wassup");
    let test7 = new LoudGreeter("Hey there");

    test("test 5", () => {
        // Assert
        expect(test5.greet("Taz")).toBe("HEY, Taz!!");
    })

    test("test 6", () => {
        // Act
        test6.addVolume();
        // Assert
        expect(test6.greet("Jim")).toBe("Wassup, Jim!!!")
    })

    test("test 7", () => {
        // Act
        test7.addVolume();
        test7.addVolume();
        // Assert 
        expect(test7.greet("Matt")).toBe("Hey there, Matt!!!!");
    })
})