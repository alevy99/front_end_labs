import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonButton } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonImg, IonButton]
})
export class LeinsterPage implements OnInit {

  constructor(private router: Router) {
  }

  showLeinsterCounties() {
    this.router.navigate(['/leinster-counties']);
  }

  ngOnInit() {
  }

}
