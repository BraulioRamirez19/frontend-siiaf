import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Oficina } from 'src/app/models/dto/oficina';
import { OficinasService } from 'src/app/models/services/oficinas.service';

@Component({
  selector: 'app-info-oficina',
  templateUrl: './info-oficina.component.html',
  styleUrls: ['./info-oficina.component.css']
})
export class InfoOficinaComponent implements OnInit {

  public titulo: string = 'Oficina Regional';
  public oficina: Oficina;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: OficinasService
  ) { }

  ngOnInit(): void {
    this.cargarOficina();
  }

  cargarOficina(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        console.log(id);
        this.service.getOficina(id).subscribe(
          response => {
            this.oficina = response;
          }
        );
      }
    );
  }
}
