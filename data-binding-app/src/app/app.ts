import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "./list-component/list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('data-binding-app');

  name:string = "Star";
  count:number = 0;
  hide:boolean = false;

  // Button Click handler
  onClickButton() {
    this.count++; // Increase number of clicks
  }

  // Image Click handler
  onImageClick() {
    this.hide = !this.hide;
  }
}
