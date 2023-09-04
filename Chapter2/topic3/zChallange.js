// digunakan untuk mendeklarasikan variabel input sebagai konstanta yang berisi array dengan lima elemen.
const input = [1, 3, 3, 5, 5]; 

// Ini adalah deklarasi variabel output. Di sini, kita menggunakan metode .
// map() pada array input untuk membuat array baru yang disimpan dalam variabel output.
const output = input.map((i) => i * i); 

// console.log(output) digunakan untuk mencetak isi dari array 
console.log("hasi: " ,output); // Output: [1, 4, 9, 16, 25]
