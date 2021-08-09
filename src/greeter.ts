"use strict";

export class Greeter {
     public greeting: string;
    constructor(greeting:string){
        this.greeting = greeting;
    }
    public greet(name: string): string {
        return `${this.greeting}, ${name}!`;
    }
}

// let person = new Greeter("Welcome");
// let rachel = person.greet("Rachel");
// console.log(rachel);

// ;