import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurant } from '../model/restaurant.entity';
import {TokenStorageService} from "../../shared/services/token.service";

const BASE_URL = 'http://191.239.123.6';
const RESTAURANT_API = BASE_URL + '/api/v1/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  getRestaurants(): Observable<Restaurant[]> {
    const token = this.tokenStorage.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Restaurant[]>(RESTAURANT_API, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error.message || error);
  }
}
