var price;
price = 1000;
console.log("Price : ",price);

var price = 2000;
console.log("Price : ",price); // 2000


// scope
var diskon = 500;
if (true) {
    var diskon = 300;
}
console.log("diskon : ",diskon);


function localDiskon() {
    var diskon = 200;
    console.log("diskon : ", diskon);
}
localDiskon();

console.log("diskon : ", diskon);