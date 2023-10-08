import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Beer } from './models/beer';

@Injectable({ providedIn: 'root' })
export class BeersService {
  private beerBaseUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {}  

  getBeersByText(text: string): Observable<Beer[]> {
    let parameters = '';
    if (text != '') {
      text = text.replaceAll(' ', '_');
      parameters = `?beer_name=${text}&hops=${text}&malt=${text}&food=${text}`;
    }
    return this.http.get<Beer[]>(`${this.beerBaseUrl}${parameters}`)
      .pipe(
        catchError(this.handleError<Beer[]>([]))
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error('Service Error', error);
      return of(result as T);
    };
  }
}