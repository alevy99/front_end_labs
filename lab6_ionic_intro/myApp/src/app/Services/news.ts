import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class News {
  constructor(private http: HttpClient) { }

  getBbcNews(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3d0612dc07a34b16b11be0fd38acca04');
  }
}
