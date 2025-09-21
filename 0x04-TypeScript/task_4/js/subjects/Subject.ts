import { Teacher } from './Teacher';

export interface Subject {
  setTeacher(teacher: Teacher): void;
}
