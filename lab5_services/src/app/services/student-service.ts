import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  
  constructor() {}

  getStudentData() {
    return [
      { id: 1, name: 'John Doe', age: 20 },
      { id: 2, name: 'Jane Smith', age: 22 },
      { id: 3, name: 'Michael Johnson', age: 19 },
    ];
  }

}
