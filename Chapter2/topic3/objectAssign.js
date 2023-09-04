const student = {
  name: "Mamat",
  class: "FEJS-3",
};
const newStudent = Object.assign({ age: 20 }, student);
console.log(newStudent); // {name:"Mamat",class:"FEJS-3",age:20}


