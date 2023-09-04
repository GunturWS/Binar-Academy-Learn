//calculate age of every student
const yearNow = new Date().getFullYear();
const students = [
  {
    name: "Guntur",
    bornIn: 2003,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
  {
    name: "Helmi",
    bornIn: 2002,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
];
// console.log("umur: ", students[1].getAge());
// console.log("umur: ", students[0].getAge());

const studentsWithAge = students.map((student) => {
    const age = student.getAge();
    return Object.assign(student, { age });
});
console.log(studentsWithAge);