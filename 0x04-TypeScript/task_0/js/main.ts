interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "London"
};
const studentsList: Student[] = [student1, student2];

// Create table element
const table = document.createElement("table");

// Loop through studentsList
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  // First name column
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Location column
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);

function greet(name:string):string{
    return `Hello,${name}!`;

}
console.log(greet("Emnet"));
