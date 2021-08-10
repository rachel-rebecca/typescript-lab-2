import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./javascriptgreeter";
import HtmlGreeter from "./htmlgreeter";
import LoudGreeter from "./loudgreeter";
import Promptsync from "prompt-sync";


let prompt = Promptsync();
// console.log("Hello, " + yourName);

let greetPrompt = prompt("Enter a greeting:")
let userGreet = new Greeter(greetPrompt);
let yourName = prompt("Enter your name:");
console.log(userGreet.greet(yourName));

let greetPrompt2 = prompt("Enter a greeting:")
let userGreet2 = new JavaScriptGreeter(greetPrompt2);
let yourName2 = prompt("Enter your name:");
console.log(userGreet2.greet(yourName2));

let greetPrompt3 = prompt("Enter a greeting:")
let userGreet3 = new LoudGreeter(greetPrompt3);
let yourName3 = prompt("Enter your name:");
console.log(userGreet3.greet(yourName3));

let greetPrompt4 = prompt("Enter a greeting:")
let userGreet4 = new HtmlGreeter(greetPrompt4);
let yourName4 = prompt("Enter your name:");
console.log(userGreet4.greet(yourName4));



/* attempt at prompt-sync library */





// 


/* notes from class */

// class Player {
//     name: string;
//     jersey: number;
//     freeThrows: number = 0;

//     constructor(name: string, jersey: number) {
//         this.name = name;
//         this.jersey = jersey;
//     }

//     overTwentyPoints(points:number): boolean {
//         return points > 20 ? true : false;
//     }
// }

// let giannis = new Player("Giannis", 34);
// console.log(giannis);
// console.log(giannis.name);
// console.log(giannis.jersey);

// let middleton = new Player("Khris", 22);
// middleton.freeThrows = 3;
// console.log(middleton);

// let finalPoints = giannis.overTwentyPoints(40);
// console.log(giannis.name + " scored over 20 points: " + finalPoints);

// class Bike {
//     speed: number = 0;
//     constructor(){}

//     go(): void {
//         this.speed++;
//     }
// }

// class GearedBike extends Bike {
//     gear: number = 1;
//     shiftUp(): void {
//         this.gear++;
//     }
//     shiftDown(): void {
//         this.gear--;
//     }
// }

// let myBike: GearedBike = new GearedBike();
// myBike.go(); // method from the superclass or parent
// console.log(myBike.speed);
// myBike.shiftUp(); // method from it's own subclass
// console.log(myBike.gear);

// class Phone {
//     name: string;
//     price: number;

//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }

// }

// let landLine = new Phone("landLine", 100);

// class SmartPhone extends Phone{
//     touchScreen: boolean;
//     constructor(name: string, price: number, touchScreen: boolean) {
//         super(name, price);
//         this.touchScreen = touchScreen;
//     }
// }

// let iPhone = new SmartPhone("iPhone", 1000, true);

// console.log(landLine);
// console.log(iPhone);

// class Movies {
//     name: string;
//     runTime: number;
//     dateOfRelease: number;

//     constructor(name: string, runTime: number, dateOfRelease: number){
//         this.name = name;
//         this.runTime = runTime;
//         this.dateOfRelease = dateOfRelease;
//     }

// }

// let spaceJam = new Movies ("Space Jam", 90, 1993);
// console.log(spaceJam);

// class BadMovies extends Movies {
//     rotten: boolean;
//     constructor(name: string, runTime: number, dateOfRelease: number, rotten: boolean) {
//         super(name, runTime, dateOfRelease);

//         this.rotten = rotten;
//     }
// }

// let spaceJam2 = new BadMovies("space Jam", 90, 2021, true);
// console.log(spaceJam2);

// class Instruments {
//     name: string;
//     cool: boolean;
//     constructor(name: string, cool: boolean) {
//         this.name = name;
//         this.cool = cool;
//     }
//     addToBand():string {

//         return this.name + " was added to band";
//     }
// }

// let drums = new Instruments("Drums", true)
// console.log(drums);

// class Brass extends Instruments {
//     clef: string;
//     constructor(name: string, cool: boolean, clef: string){
//         super(name, cool);
//         this.clef = clef;
//     }
//     addToBand() {
//         return super.addToBand() + ": Jazz Band";
//     }
// }

// let trumpet = new Brass("Trumpet", true, "treble");
// console.log(trumpet);

// console.log(drums.addToBand());
// console.log(trumpet.addToBand());
