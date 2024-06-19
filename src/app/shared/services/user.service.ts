import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';
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
