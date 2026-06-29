import { Component, input, output, signal, computed} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  currentRating = input<number>(0);
  ratingChanged = output<number>();

  hoverRating = signal<number>(0);
  displayRating = computed(() => this.hoverRating() || this.currentRating()); //Permet de garder la note affichée meme apres le clic

  onHover(star: number) {
    this.hoverRating.set(star); //on remplace hoverRating par star
  }

  onLeave() {
    this.hoverRating.set(0); //on remet hoverRating à 0 (plus de survol)
  }

  selectRating(star: number) {
    this.ratingChanged.emit(star); //On emet le output ratingChanged avec la valeur star
  }
}
