import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolData } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private apiUrl = 'https://api.jsonblob.com/019cce09-7169-7b60-920c-1ffb7a09b6c4';
  
  constructor(public httpClient: HttpClient) {}

  getStudents(): Observable<SchoolData> {
    return this.httpClient.get<SchoolData>(this.apiUrl);
  }

}
