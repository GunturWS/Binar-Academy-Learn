import chalk from "chalk"; // Third party module / library / package

import os from "os"; // core module
import fs from "fs";

// import local module
import * as calculateTriangle from "./module/calculateTriangle.js";

import calculateTrianglee from "./module/calculateTriangle.js"

import { calculateTriangleArea } from "./module/calculateTriangle.js";

// import calculateTriangle, {
//     calculateTriangleAround,
//     Guntur,
// } from "./module/calculateTriangle.js"



console.log(chalk.red("saya Guntur"));
console.log(chalk.blue("Saya Wisnu"));
console.log(chalk.green("saya Saputra"));

//memory os
const freeMemorry = os.freemem() / 1024 / 1024;
const totalMemorry = os.totalmem() / 1024 / 1024;
console.log("Free Memorry (MB): ", freeMemorry);
console.log("Total Memorry (MB): ", totalMemorry);

// example txt
const exampleFile = fs.readFileSync("./example.txt");
console.log("example File: ", exampleFile.toString());


// triangle area, arround
const triangleArea = calculateTrianglee(15, 20);
console.log("triangle Area: ", triangleArea);

const triangleAround = calculateTriangle.calculateTriangleAround(10);
console.log("triangle Around: ", triangleAround)

console.log(calculateTriangle.Guntur);