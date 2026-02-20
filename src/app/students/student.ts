import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  private students: string[] = [];

  getStudents(): string[] {
    return this.students;
  }

  addStudent(name: string){
    this.students.push(name);
  }

  updateStudent(index: number, name: string){
    this.students[index] = name;
  }

  deleteStudent(index: number){
    this.students.splice(index,1);
  }
}
