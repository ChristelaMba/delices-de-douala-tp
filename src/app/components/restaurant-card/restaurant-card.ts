import { Component, input, output } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-restaurant-card',
  imports: [StarRating],
  templateUrl: './restaurant-card.html',
  styleUrl: './restaurant-card.css',
})
export class RestaurantCard {
  restaurant = input.required<Restaurant>();
  restaurantRated = output<{restaurantId: number, newRating: number}>();

  onRatingChanged(newRating: number) {
    this.restaurantRated.emit({restaurantId: this.restaurant().id, newRating: newRating});
  }
}
