import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonImg, IonButtons, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-connaught',
  templateUrl: './connaught.page.html',
  styleUrls: ['./connaught.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonImg, IonList, IonItem]
})
export class ConnaughtPage implements OnInit {

  // Array of Connaught provinces
  provinces: any[] = [
    { name: 'Galway' },
    { name: 'Mayo' },  
    { name: 'Roscommon' },
    { name: 'Sligo' },
    { name: 'Leitrim' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
