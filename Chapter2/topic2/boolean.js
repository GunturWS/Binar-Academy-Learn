let trueBool = true;
let falseBool = false;

let apakahlebihdaridua = 3 > 2;
console.log(apakahlebihdaridua);


// jika semua true maka yang akan di ambil adalah nilai terakhir
let a = 1;
let b = 2;
const c = 1 && 2 && true && "berhasil" && 9;
console.log("c:", c);

// OR logic is to find the first true value
let d = 1;
const e = false || false || false || true;
console.log('e:', e);


// ternarty operator
// normal if
let newBool;
if (trueBool) {
    newBool = 1;
} else {
    newBool = 0;
}
console.log("new bool: ", newBool);

// ternary
newBool = trueBool ? 1 : 0;
console.log("new bool ternary: ", newBool);