import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { Usuario } from 'src/app/models/dto/usuario';
import { AuthService } from 'src/app/models/services/auth.service';
import { TmpToken } from 'src/app/models/dto/tmp-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: string = 'Iniciar Sesión';
  usuario: Usuario;

  constructor(public authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      swal.fire('Login',
        this.authService.session.nombre + ' ya estás autenticado !', 'info');
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    if (this.usuario.username == null || this.usuario.password == null) {
      swal.fire('Error de login', 'Usuario o contraseña vacío', 'error');
      return;
    }
    this.authService.login(this.usuario).subscribe(
      response => {
        this.authService.guardarToken(response);
        this.router.navigate(['/home']);
        swal.fire('Bienvenido',
          'Hola ' + this.authService.session.nombre + ', has iniciado sesión !',
          'success');
      },
      err => {
        if (err.status == 400) {
          swal.fire('Error', 'Usuario o contraseña incorrecta !', 'error');
        }
      }
    );
  }

}
