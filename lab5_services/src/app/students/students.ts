import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentService } from '../services/student-service';
import { SchoolData, Student } from '../models/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit {

  schoolData: SchoolData;
  errorMessage: string = '';
  loading: boolean = true;
  
  constructor(
    private studentService: StudentService
    , private cdr: ChangeDetectorRef
  ) { 
    this.schoolData = {
      School: '',
      Address: '',
      students: []
    };
  }

  ngOnInit(): void {
    // Subscribe to the Observable returned by the service
    this.studentService.getStudents().subscribe({
      next: (data: SchoolData) => {
        this.loading = false;
        //console.log('DATA:', data);
        this.schoolData = data;
        // this.students = data.students;
        this.cdr.detectChanges();
      },
      error: (err) => {
        //console.log('ERROR:', err);
        this.errorMessage = 'Failed to load student data. Please try again.';
        this.loading = false;
        console.error('Error fetching students:', err);
      }
    });
  }
}
