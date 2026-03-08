import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  
  constructor(public httpClient: HttpClient) {}

  getStudentData() {
    return [
      { id: 1, name: 'John Doe', age: 20 },
      { id: 2, name: 'Jane Smith', age: 22 },
      { id: 3, name: 'Michael Johnson', age: 19 },
    ];
  }

}
