const diskon = 500;
if (true) {
    const diskon = 300;
    console.log("diskon : ", diskon);
}
console.log("diskon: ", diskon);

/*
    reassign and redeclared
    const can not be reassigned and redeclared
*/
const earth = "bulat";
// earth = "datar";
// const earth = "datar";

const object = { id: 1, name: "Guntur" };
object.location = "Balikpapan";
console.log("object : ", object);
// const object = {}; error

const array = [1, 2, 3, 4];
array.push(5);
console.log("array: ", array);
// const array = []; error
