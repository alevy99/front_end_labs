import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../services/weather-service';

@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather implements OnInit {

  weatherData: any;
  errorMessage: string = '';
  loading: boolean = true;


  constructor(private weatherService: WeatherService
    // Use of ChangeDetectorRef to trigger change detection after async data load
    , private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Subscribe to the Observable returned by the service
    this.weatherService.getWeatherData().subscribe({
      next: (data: any) => {
        this.weatherData = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Failed to load weather data. Check your API key';
        this.loading = false;
        console.error('Error fetching weather:', err);
      }
    });
  }

}
