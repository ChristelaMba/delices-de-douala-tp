import { Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [DecimalPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  ratedCount = input<number>(0);

  averageRating = input<number>(0);
}
