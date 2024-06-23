import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
  private restaurantUrl = 'http://localhost:3000/userR';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          return { ...user, userType: 'usuario' };
        } else {
          throw new Error('Usuario o contraseña incorrectos');
        }
      }),
      catchError(error => {
        console.error(error);
        return of(null);
      })
    );
  }


  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.some(u => u.email === email))
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  loginR(emailR: string, passwordR: string): Observable<any> {
    return this.http.get<any[]>(this.restaurantUrl).pipe(
      map(restaurants => {
        const restaurant = restaurants.find(r => r['email-R'] === emailR && r['password-R'] === passwordR);
        if (restaurant) {
          return { ...restaurant, userType: 'restaurante' };
        } else {
          throw new Error('Correo electrónico o contraseña incorrectos');
        }
      }),
      catchError(error => {
        console.error(error);
        return of(null);
      })
    );
  }

  checkEmailExistsR(emailR: string): Observable<boolean> {
    return this.http.get<any[]>(this.restaurantUrl).pipe(
      map(restaurants => restaurants.some(r => r['email-R'] === emailR))
    );
  }

  registerR(userR: any): Observable<any> {
    const formattedUserR = {
      'name-R': userR.nameR,
      'email-R': userR.emailR,
      'password-R': userR.passwordR
    };
    return this.http.post<any>(this.restaurantUrl, formattedUserR);
  }
}






// private apiURL = 'https://my-json-server.typicode.com/JosArr/databaseFinanzas/usuarios';
  // isLoggedIn: boolean = false;
  // usuarioLogueado: any;
  // constructor(private http: HttpClient) { }
  //
  // addUser(user: any): Observable<any> {
  //   return this.http.post<any>(this.apiURL, user);
  // }
  //
  // getUserByEmail(email: string): Observable<any> {
  //   return this.http.get<any[]>(this.apiURL).pipe(
  //     map(users => users.find(user => user.correo === email))
  //   );
  // }
  // editarUsuario(usuario: any): Observable<any> {
  //   const url = `${this.apiURL}/${usuario.id}`;
  //   return this.http.put<any>(url, usuario);
  // }
  // getUserPassword(): Observable<string[]> {
  //   return this.http.get<any[]>(this.apiURL).pipe(
  //     map(users => users.map(user => user.contrasena))
  //   );
  // }
  // loginUser(email: string, password: string): Observable<any> {
  //   const loginData = {
  //     correo: email,
  //     contrasena: password,
  //   };
  //
  //
  //   return this.http.post<any>(`${this.apiURL}/login`, loginData).pipe(
  //     map((response) => {
  //       if (response) {
  //         this.isLoggedIn = true;
  //       }
  //       return response;
  //     })
  //   );
  // }
  // cerrarSesion() {
  //   this.isLoggedIn = false;
  //   this.usuarioLogueado = null;
  // }
  // setUsuarioLogueado(usuario: any) {
  //   this.usuarioLogueado = usuario;
  //   this.isLoggedIn = true;
  // }
  // getUsuarioLogueado() {
  //   return this.usuarioLogueado;
  // }

// }
