import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../dto/usuario';
import { Session } from '../dto/session';
import { TmpToken } from '../dto/tmp-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _session: Session;
  private _token: string;

  constructor(private http: HttpClient) {
  }

  public get session(): Session {
    if (this._session != null) {
      return this._session;
    } else if (sessionStorage.getItem('session') != null) {
      this._session = JSON.parse(sessionStorage.getItem('session')) as Session;
      return this._session;
    }
    return new Session();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (sessionStorage.getItem('accessToken') != null) {
      this._token = sessionStorage.getItem('accessToken');
      return this._token;
    }
    return null;
  }

  login(usuario: Usuario): Observable<any> {
    /*
    const urlEndpoint: string = 'http://localhost:8001/oauth/token';
    const credenciales: string = btoa('angularapp:12345');
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization':'Basic ' + credenciales
    });
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
  
    return this.http.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
    */
    if (usuario.username == 'admin' && usuario.password == '12345') {
      let token : TmpToken = new TmpToken();
      return new Observable((observer) => {
        return observer.next(token);
      });
    } else {
      return;
    }
    
  }

  guardarToken(accessToken: any): void {
    this._token = accessToken.access_token;
    sessionStorage.setItem('accessToken', this._token);
    this.guardarSession();
  }

  isAuthenticated(): boolean {
    return this.session.username != null;
  }

  logout(): void {
    this._token = null;
    this._session = null;
    sessionStorage.clear();
  }

  hasRole(role: string): boolean {
    return this.session.roles.includes(role);
  }

  private guardarSession(): void {
    let payload: any = JSON.parse(atob(this._token.split(".")[1]));
    this._session = new Session();
    this._session.username = payload.user_name;
    this._session.nombre = payload.nombre;
    this._session.email = payload.correo;
    this._session.roles = payload.authorities;
    sessionStorage.setItem('session', JSON.stringify(this._session));
  }

}

