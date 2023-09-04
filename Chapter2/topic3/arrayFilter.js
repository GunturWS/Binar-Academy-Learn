const students = [
  {
    name: "Alim",
    BornIn: 2003,
  },
  {
    name: "Lana",
    BornIn: 2002,
  },
  {
    name: "Saman",
    BornIn: 2003,
  },
  {
    name: "Helmi",
    BornIn: 2004,
  },
];
const filteredStudent = students.filter((students) => {
    if (students.bornIn = 2002) {
        return true;
    }
    return false;
});
console.log(filteredStudent);
