import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { AuthService } from 'src/app/models/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public preTitle: string = 'Sistema Integral de Información Administrativa y Financiera';
  public postTitle: string = 'SIIAF | ' + this.authService.session.username;

  public menues: string[][] = [['Oficinas','/oficinas'],['Test','/test']];

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    swal.fire('Logout' , this.authService.session.nombre + ' has cerrado sesión.', 'success');
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
