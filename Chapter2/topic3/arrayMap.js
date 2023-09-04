const numbers = [1, 2, 3, 4, 5];
const mutatedItems = numbers.map((i) => {
    return i * 2; // return a new value for each item in the array
});
console.log(mutatedItems);

const students = [
    {
        name: "Guntur",
        bornIn: 2003,
    },
    {
        name: "Saman",
        bornIn: 2003,
    },
];
//calculate age of every student
const yearNow = new Date().getFullYear();
const studentsWithAge = students.map((students) =>{
    const age = yearNow - students.bornIn;
    return {
        ...students,
        age,
    };
});
console.log(studentsWithAge);

let student = {
    name : "Arwin",
    bornIn: 2002,
};
student = {
    ...student , // di ibaratkan untuk memasukkan name, dan bornin untuk digabungkan dengan age
    age: 21,
};
console.log(student);