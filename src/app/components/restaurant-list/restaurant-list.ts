import { Component, input, output } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { RestaurantCard } from '../restaurant-card/restaurant-card';

@Component({
  selector: 'app-restaurant-list',
  imports: [RestaurantCard],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  restaurants = input.required<Restaurant[]>();
  restaurantRated = output<{restaurantId: number, newRating: number}>();

  onRestaurantRated(event: {restaurantId:number, newRating:number}) {
    this.restaurantRated.emit(event);
  }
}
