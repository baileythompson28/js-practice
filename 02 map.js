const employees = [
    { firstName: "John", lastName: "Smith" }, 
    { firstName: "Sarah", lastName: "Johnson" }, 
    { firstName: "Mike", lastName: "Williams" }, 
    { firstName: "Emily", lastName: "Davis" } 
];

const email = employees.map(emailAddress)
console.log(email);

function emailAddress(element){
    return `${element.firstName}.${element.lastName}@company.com`;
}