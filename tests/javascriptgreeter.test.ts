"use strict"

import {JavaScriptGreeter} from "../src/javascriptgreeter";

describe("JavaScript Greeter tests", () => {
    // Arrange
    let test3 = new JavaScriptGreeter("Hello");
    let test4 = new JavaScriptGreeter("Hi")

    test("test3", () => {
        // Assert
        expect(test3.greet("Jessica")).toBe("console.log('Hello, Jessica!')");
    })

    test("test4", () => {
        // Assert
       expect(test4.greet("Stephanie")).toBe("console.log('Hi, Stephanie!')")
    })


})
