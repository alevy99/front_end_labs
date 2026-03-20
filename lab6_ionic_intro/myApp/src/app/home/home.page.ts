import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonButton, IonBackButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList],
})
export class HomePage {
  
  constructor(private router: Router) { }

  // onWeatherClick() {
  //   this.router.navigate(['/news']);
  // }
}
