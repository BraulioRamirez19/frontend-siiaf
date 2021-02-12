import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';

import { NavbarComponent } from './layouts/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InfoOficinaComponent } from './components/oficinas/info-oficina/info-oficina.component';
import { MapaComponent } from './components/oficinas/mapa/mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    OficinasComponent,
    InfoOficinaComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
