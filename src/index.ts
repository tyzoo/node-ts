import * as dotenv from "dotenv";
dotenv.config();

function greet(name: string): void {
    console.log(`Hello ${name}`)
}

greet("Neo");