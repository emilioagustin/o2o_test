import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class BeerComponent {
  @Input() beer!: Beer;

  constructor() {
  }
}
