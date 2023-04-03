import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating = 0;

  get fullStars(): any[] {
    const fullStarsCount = Math.floor(this.rating);
    return Array(fullStarsCount).fill(0);
  }

  get halfStars(): any[] {
    const hasHalfStar = this.rating % 1 !== 0;
    return hasHalfStar ? [0] : [];
  }

  get emptyStars(): any[] {
    const emptyStarsCount = Math.floor(5 - this.rating);
    return Array(emptyStarsCount).fill(0);
  }
}

