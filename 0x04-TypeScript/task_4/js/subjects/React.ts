/// <reference path = 'Cpp.ts' />
namespace Subjects {
  export class ReactClass {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  export interface Teacher {
    experienceTeachingReact?: number;
  }
}
