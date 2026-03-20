import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { News } from '../Services/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton, IonLabel, IonList, IonItem]
})
export class NewsPage implements OnInit {

  stories: any[] = [];

  constructor(private newsService : News) { }

  ngOnInit() {


  }

  ionViewWillEnter() {
    this.newsService.getBbcNews().subscribe((data) => {
      
      this.stories = data.articles;
      console.log(this.stories);
    });
  }

}
