// main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // only modifiable on initialization
  readonly lastName: string;  // only modifiable on initialization
  fullTimeEmployee: boolean;  // always defined
  yearsOfExperience?: number; // optional
  location: string;           // always defined

  // allows adding extra properties of any type
  [key: string]: any;
}

// Create a Teacher object
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Addis Ababa",
  yearsOfExperience: 3,
  contract: true,  // extra attribute
  subject: "Mathematics" // another extra attribute
};

// Trying to modify firstName or lastName will cause an error
// teacher1.firstName = "Bob"; // ❌ Error: Cannot assign to 'firstName' because it is a read-only property

// Modify allowed properties
teacher1.fullTimeEmployee = false;
teacher1.location = "Bahir Dar";

// Add more extra attributes dynamically
teacher1.email = "alice.smith@example.com";

console.log(teacher1);
