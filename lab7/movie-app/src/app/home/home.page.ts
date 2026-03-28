import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { MovieService } from '../Services/movie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class HomePage {
  constructor(private movieService: MovieService) {}

  movies: any[] = [];

  ionViewWillEnter() {
    this.movieService.getMovies().subscribe((data) => {
      
      this.movies = data.Search; // Assuming the API returns a 'Search' array
      console.log(this.movies);
    });
  }
}
