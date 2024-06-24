import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = 'http://191.239.123.6';
const AUTH_API = BASE_URL + '/api/v1/authentication/';
const CUSTOMER_API = BASE_URL + '/api/v1/customers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'sign-up', user, httpOptions)
      .pipe(catchError(this.handleError));
  }

  signIn(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'sign-in', credentials, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  createCustomer(customer: any, token: string): Observable<any> {
    const httpOptionsWithToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Add token to headers
      })
    };
    return this.http.post(CUSTOMER_API, customer, httpOptionsWithToken)
      .pipe(catchError(this.handleError));
  }

  getUserProfile(userId: number, token: string): Observable<any> {
    const httpOptionsWithToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get(`${CUSTOMER_API}/user/${userId}`, httpOptionsWithToken)
      .pipe(catchError(this.handleError));
  }

  updateUserProfile(id: number, userProfile: any, token: string): Observable<any> {
    const httpOptionsWithToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.put(`${CUSTOMER_API}/${id}`, userProfile, httpOptionsWithToken)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error.message || error);
  }

  private get httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
