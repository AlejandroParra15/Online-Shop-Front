import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import swal from 'sweetalert2';

@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/shop/users';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router,
    private authService: AuthService) { }

  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNoAutorizado(e): boolean {
    if (e.status == 401) {

      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login']);
      return true;
    }

    if (e.status == 403) {
      swal('Acceso denegado', `Hola ${this.authService.usuario.email} no tienes acceso a este recurso!`, 'warning');
      this.router.navigate(['/shop/books']);
      return true;
    }
    return false;
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.agregarAuthorizationHeader()})
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.agregarAuthorizationHeader()})
  }

  delete(id: string): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.agregarAuthorizationHeader()})
  }

}
