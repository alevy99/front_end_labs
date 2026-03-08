import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  constructor(private studentService: StudentService) { }

  getStudents() {
    return this.studentService.getStudentData();
  }
}
