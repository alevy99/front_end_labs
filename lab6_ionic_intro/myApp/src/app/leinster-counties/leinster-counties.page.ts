import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem]
})
export class LeinsterCountiesPage implements OnInit {
  counties: any[] = [
    { name: 'Dublin' },
    { name: 'Kildare' },
    { name: 'Kilkenny' },
    { name: 'Laois' },
    { name: 'Longford' },
    { name: 'Louth' },
    { name: 'Meath' },
    { name: 'Offaly' },
    { name: 'Westmeath' },
    { name: 'Wexford' },
    { name: 'Wicklow' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
