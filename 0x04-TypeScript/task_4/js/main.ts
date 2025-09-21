// import { Subjects } from './subjects/Teacher';
// import { Cpp } from './subjects/Cpp'; 
// import { Java } from './subjects/Java'; 
// import { React } from './subjects/React'; 
// // Create and export constants for each subject 
// export const cpp = new Cpp(); 
// export const java = new Java();
// export const react = new React();
// // Create and export a Teacher object with e
// xperienceTeachingC = 10 export const cTeacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
// // Cpp subject console.log('C++');
// cpp.setTeacher(cTeacher); 
// console.log(cpp.getRequirements()); 
// console.log(cpp.getAvailableTeacher()); 
// // Java subject console.log('Java'); 
// java.setTeacher(cTeacher); 
// console.log(java.getRequirements()); 
// console.log(java.getAvailableTeacher());
// // React subject console.log('React'); 
// react.setTeacher(cTeacher); 
// console.log(react.getRequirements());
// console.log(react.getAvailableTeacher());



import { Teacher } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Create subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create Teacher class instance with experienceTeachingC = 10
export const cTeacher: Teacher = new Teacher('John', 'Doe', 10);

// Assign teacher to subjects
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// Logging
console.log('C++', cpp.getRequirements(), cpp.getAvailableTeacher());
console.log('Java', java.getRequirements(), java.getAvailableTeacher());
console.log('React', react.getRequirements(), react.getAvailableTeacher());
