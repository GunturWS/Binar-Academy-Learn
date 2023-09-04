//Unshift befungsi Menambahkan didepan

const fruits = ["Apple", "Orange", "Durian"];
fruits.unshift("Tomato");
console.log(fruits);

const students = [
  {
    name: "Guntur",
    class: "FEJS-3",
  },
  {
    name: "Helmi",
    class: "FEJS-3",
  },
];
students.unshift({
  name: "Arwin",
  class: "FEJS-3",
});
console.log(students);
