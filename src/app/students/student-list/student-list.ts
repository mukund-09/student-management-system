import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  studentForm!: FormGroup;
  editIndex: number | null = null;
  studenets: string[] = [];

  constructor(
    private fb: FormBuilder,
    public studentService: Student
  ) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get students() {
    return this.studentService.getStudents();
  }

  get name() {
    return this.studentForm.get('name');
  }
  

  addStudent() {
    if (this.studentForm.invalid) return;

    const value = this.studentForm.value.name;
    if (!value) return;

    if (this.editIndex !== null) {
      this.studentService.updateStudent(this.editIndex, value.trim());
      this.editIndex = null;
    } else {
      this.studentService.addStudent(value.trim());
    }

    this.studentForm.reset();
  }

  startEdit(index: number) {
    this.editIndex = index;
    this.studentForm.patchValue({
      name: this.students[index]
    });
  }

  deleteStudent(index: number) {
    this.students.splice(index,1);
  }

  cancelEdit() {
    this.editIndex = null;
    this.studentForm.reset();
  }
}
