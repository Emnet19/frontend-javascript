import { Teacher } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Create and export constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object (class instance)
export const cTeacher: Teacher = new Teacher('John', 'Doe', 10);

// Assign teacher to subjects
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// Log output
console.log('C++', cpp.getRequirements(), cpp.getAvailableTeacher());
console.log('Java', java.getRequirements(), java.getAvailableTeacher());
console.log('React', react.getRequirements(), react.getAvailableTeacher());
