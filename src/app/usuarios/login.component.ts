import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public titulo: string = "Por favor inicie sesion";
  public cliente: Cliente;

  constructor(private authService: AuthService, private router: Router) {
    this.cliente = new Cliente;
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      swal('Login', `Hola ${this.authService.usuario.email} ya estás autenticado!`, 'info');
      this.router.navigate(['/shop/books']);
    }
  }

  login(): void {
    console.log(this.cliente);
    if (this.cliente.email == null || this.cliente.password == null) {
      swal("Error", "Correo o contrasena vacias!", 'error');
      return;
    }

    this.authService.login(this.cliente).subscribe(response => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
      this.router.navigate(['/shop/books']);
      swal('Login', `Hola ${usuario.email}, has iniciado sesión con éxito!`, 'success');
    }, err => {
      if (err.status == 400) {
        swal('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );

  }

}
