import { Component, inject } from '@angular/core';
import { BeerComponent } from '../beer/beer.component';
import { CommonModule } from '@angular/common';
import { Beer } from '../models/beer';
import { BeersService } from '../beers.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],
  imports: [
    BeerComponent,
    CommonModule  ]
})
export class HomeComponent{
  queryText = '';
  beerList: Beer[] = [];
  beerService: BeersService = inject(BeersService);

  constructor() {
    this.getBeers();
  }

  updateBeers(text: string) {
    this.queryText = text;
    this.getBeers();
  }

  getBeers() {
    this.beerService.getBeersByText(this.queryText)
      .subscribe(beerList => {
        this.beerList = beerList
      });
  }
}