import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing-module';
import { StudentList } from './student-list/student-list';


@NgModule({

  imports: [
    CommonModule,
    StudentsRoutingModule,
  ]
})
export class StudentsModule { }
