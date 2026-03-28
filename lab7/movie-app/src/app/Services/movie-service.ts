import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get('https://www.omdbapi.com/?apikey=a02de484&s=%27war%27');
  }
} 
