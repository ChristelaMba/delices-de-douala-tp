import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Restaurant } from './models/restaurant';
import { RestaurantList } from './components/restaurant-list/restaurant-list';
import { Header } from "./components/header/header";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RestaurantList, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  restaurants = signal<Restaurant[]>([ 
  { id: 1, name: 'Le Calao Doré', district: 'Akwa', 
    speciality: 'Ndolé aux crevettes', currentRating: 0 }, 
  { id: 2, name: 'Chez Madame Ngono', district: 'Bonapriso', 
    speciality: 'Eru aux pieds de bœuf', currentRating: 0 }, 
  { id: 3, name: 'La Fourchette Camerounaise', district: 'Bonanjo', 
    speciality: 'Poulet DG', currentRating: 0 }, 
  { id: 4, name: 'Saveurs du Wouri', district: 'Bonamoussadi', 
    speciality: 'Poisson braisé', currentRating: 0 }, 
  { id: 5, name: "L'Akwa Gourmand", district: 'Akwa', 
    speciality: 'Bobolo et sauce arachide', currentRating: 0 }, 
  { id: 6, name: 'Le Royal de Bali', district: 'Bali', 
    speciality: 'Koki et plantain', currentRating: 0 } 
]); 

  isFilterActive = signal<boolean>(false);

  ratedCount = computed(() => this.restaurants().filter(r =>r.currentRating > 0).length);

  averageRating = computed(() => {
    const rated = this.restaurants().filter(r => r.currentRating > 0);
    if (rated.length === 0) return 0;
    const sum = rated.reduce((total, r) => total + r.currentRating, 0);
    return sum / rated.length;
  });

  sortedRestaurants = computed(() => {
    const sorted = [...this.restaurants()].sort((a, b) => b.currentRating - a.currentRating);
    if (this.isFilterActive()) {
      return sorted.filter(r => r.currentRating >= 4);
    }
    return sorted;
  });

  onRestaurantRated(event: { restaurantId: number, newRating: number}) {
    this.restaurants.update(currentList =>
      currentList.map(r =>
        r.id === event.restaurantId
          ? { ...r, currentRating: event.newRating }
          : r
      )
    );
  }
  
  toggleFilter() {
    this.isFilterActive.update(current => !current);
  }
}
