import HtmlGreeter from "../src/htmlgreeter";

describe("HTML Greeter", () => {
    test("test 8 set to default <h1> tag", () => {
        // Arrange
        let test8 = new HtmlGreeter("Yello");
        // Assert
        expect(test8.greet("Reggie")).toBe("<h1>Yello, Reggie!</h1>");
    })

    test("test 9 with <p> tag", () => {
        // Arrange
        let test9 = new HtmlGreeter("Hi there", "p");
        // Assert
        expect(test9.greet("Jenny")).toBe("<p>Hi there, Jenny!</p>")
    })

    test("test 10 with <div> tag", () => {
        // Arrange
        let test10 = new HtmlGreeter("Greetings", "div");
        // Assert
        expect(test10.greet("Kaela")).toBe("<div>Greetings, Kaela!</div>");
    })
})
