import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRating } from "./components/star-rating/star-rating";
import { RestaurantCard } from "./components/restaurant-card/restaurant-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StarRating, RestaurantCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delices-de-douala-tp');

  testRestaurantCard = {
    id:1, name: 'Le Calao Doré', district: 'Akwa, Douche', speciality:'Ndolé', currentRating:3
  };
}
