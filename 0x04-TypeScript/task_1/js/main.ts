



interface TeacherProps {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows adding extra properties like contract
}

class Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  constructor({ firstName, lastName, fullTimeEmployee, location, yearsOfExperience, ...extraProps }: TeacherProps) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = yearsOfExperience!;

    // assign any extra dynamic properties
    Object.assign(this, extraProps);
  }
}

// Directors interface extends TeacherProps
interface Directors extends TeacherProps {
  numberOfReports: number;
}

// Example usage of Teacher
const teacher1 = new Teacher({
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
  contract: true // extra property
});

console.log(teacher1);

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
