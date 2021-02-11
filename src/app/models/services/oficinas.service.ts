import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gerencia } from '../dto/gerencia';
import { Oficina } from '../dto/oficina';

import { GERENCIAS } from '../dto/gerencias.json';
import { OFICINA } from '../dto/oficina.json';

@Injectable({
  providedIn: 'root'
})
export class OficinasService {

  private gerencias: Gerencia[];

  constructor() { 
    this.gerencias = GERENCIAS;
  }

  getGerencias(): Observable<any> {
    return new Observable(observer => {
      return observer.next(this.gerencias);
    });
  } 

  getOficina(id: number): Observable<any> {
    let oficina: Oficina = OFICINA;
    return new Observable(observer => {
      return observer.next(oficina);
    });
  }

}
