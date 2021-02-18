import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes ordenados ascendentemente */
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InfoOficinaComponent } from './components/oficinas/info-oficina/info-oficina.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'oficinas', component: OficinasComponent },
  { path: 'oficinas/info/:id', component: InfoOficinaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
