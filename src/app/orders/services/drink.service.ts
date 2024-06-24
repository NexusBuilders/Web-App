import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Drink } from '../model/drink.entity';
import { TokenStorageService } from '../../shared/services/token.service';

const BASE_URL = 'http://191.239.123.6';
const DRINK_API = BASE_URL + '/api/v1/drinks';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  getDrinks(restaurantId: number): Observable<Drink[]> {
    const token = this.tokenStorage.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<Drink[]>(`${DRINK_API}/restaurant/${restaurantId}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  addDrink(data: any): Observable<any> {
    const token = this.tokenStorage.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add token to headers
      })
    };
    return this.http.post<any>(DRINK_API, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error.message || error);
  }
}
