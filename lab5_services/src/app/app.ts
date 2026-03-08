import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from "./students/students";
import { Weather } from "./weather/weather";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Students, Weather],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab5_services');
}
