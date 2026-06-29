import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRating } from "./components/star-rating/star-rating";
import { RestaurantCard } from "./components/restaurant-card/restaurant-card";
import { RestaurantList } from './components/restaurant-list/restaurant-list';

interface Restaurant {
  id: number;
  name: string;
  district: string;
  speciality: string;
  currentRating: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StarRating, RestaurantCard, RestaurantList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delices-de-douala-tp');

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
}
