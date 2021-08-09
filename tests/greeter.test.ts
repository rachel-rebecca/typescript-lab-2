"use strict"

import {Greeter} from "../src/greeter";

describe("Greeter class", () => {
    // Arrange
    let test1 = new Greeter("Welcome");
    let test2 = new Greeter("Good day")

    test("check if greeting is correct", () => {
        // Assert
        expect(test1.greet("Scott")).toBe("Welcome, Scott!")
    })

    test("check if greet method works", () => {
        // Assert
        expect(test2.greet("Daniel")).toBe("Good day, Daniel!")
    })
})