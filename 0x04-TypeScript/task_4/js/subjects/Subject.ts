// import { Teacher } from './Teacher';

// export class Subject {
//   teacher!: Teacher;

//   setTeacher(teacher:Teacher) {
//     this.teacher = teacher;
//   }
// }

import { Teacher } from './Teacher';

export namespace Subjects {
  export class Subject {
    teacher!: Teacher;

    setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}
