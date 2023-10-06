const { error } = require("console");
const fs = require("fs")

console.log("start.....");
fs.readFile ("./data/students.json", "utf-8", (error, data) => {
    if (error) {
        throw error;
    }
    console.log(data);
    
    fs.readFile("./data.try.json", "utf-8", (error, data) => {
        if(error){
            throw error;
        }
        console.log(data);
        console.log("End.....");
    });
})