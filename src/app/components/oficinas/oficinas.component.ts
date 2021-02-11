import { Component, OnInit } from '@angular/core';
import { Gerencia } from 'src/app/models/dto/gerencia';
import { OficinasService } from 'src/app/models/services/oficinas.service';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {

  public titulo: string = 'Oficinas';
  public gerencias: Gerencia[];

  constructor(public service: OficinasService) { }

  ngOnInit(): void {
    this.service.getGerencias().subscribe(
      response => {
        this.gerencias = response;
    });
  }

}
