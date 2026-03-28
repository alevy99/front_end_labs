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
  // Inject the MovieService to fetch movie data
  constructor(private movieService: MovieService) {}

  movies: any[] = [];

  ionViewWillEnter() {
    // Fetch movies when the view is about to enter
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.Search; // Assuming the API returns a 'Search' array
      console.log(this.movies); // log the movies to verify the data is being fetched correctly
    });
  }
}
