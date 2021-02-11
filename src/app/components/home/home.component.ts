import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string = 'Servicios a la Navegación en el Espacio Aéreo Mexicano';
  public descripcion: string = 'SENEAM proporciona servicios de ayuda a la navegación aérea con seguridad, fluidez y orden en el espacio aéreo mexicano, garantizando calidad y eficiencia conforme a la normatividad nacional e internacional aplicable. Tiene como Misión "garantizar a través de servicios a la navegación, el transporte seguro y eficiente de personas y bienes en el espacio aéreo mexicano". Su mirada está puesta en el futuro con la Visión de "adoptar y establecer oportuna y eficientemente la infraestructura y técnicas innovadoras en la prestación de los servicios a la navegación aérea, acorde al desarrollo de la aviación".';

  constructor() { }

  ngOnInit(): void {
  }

}
