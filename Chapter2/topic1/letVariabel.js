// scope

let diskon = 500;
if (true) {
    let diskon = 300;
    console.log("diskon : ", diskon);
}
console.log("diskon : ", diskon);


// reassign & redeclared
let name;
console.log("name : ", name);
name = "Bot";
console.log("name : ", name);
// let name = "mentor"
// console.log(name);