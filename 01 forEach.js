const students = [ 
    { name: "Alex", grade: 92 }, 
    { name: "Jordan", grade: 76 }, 
    { name: "Taylor", grade: 85 }, 
    { name: "Morgan", grade: 59 }, 
    { name: "Casey", grade: 68 } 
]; 

students.forEach(function(student) {
    const gradeStatus = student.grade >= 60 ? "Passing" : "Failing";
    console.log(`${student.name}: ${student.grade} - ${gradeStatus}`);
});

