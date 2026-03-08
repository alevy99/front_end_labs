import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }


  getWeatherData() : Observable<any> {
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=8a2fed3c4a0e5eef0fbc2f8d14231a03';
    return this.httpClient.get(apiUrl);
  }

}
