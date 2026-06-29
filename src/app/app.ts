import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarRating } from "./components/star-rating/star-rating";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StarRating],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('delices-de-douala-tp');
}
