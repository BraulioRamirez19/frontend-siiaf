import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_mexicoHigh from "@amcharts/amcharts4-geodata/mexicoHigh";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//import { Router } from "@angular/router";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

constructor(/*private router: Router*/){}

/*detalle():void{
  this.router.navigate(['/home']);
}*/


  ngOnInit(): void {

    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_mexicoHigh;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ["AQ"];

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.propertyFields.fill = "color";

    // Create image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    // Create image
    var imageSeriesTemplate = imageSeries.mapImages.template;
    var marker = imageSeriesTemplate.createChild(am4core.Image);

    marker.fill = am4core.color("white");
    marker.width = 20;
    marker.height = 20;
    marker.nonScaling = true;
    marker.tooltipHTML = "<b>{title}</b> <p style='font-size: 15px;margin:0;'>{cc}</p> <p style='font-size: 15px;margin:0;'>{tc}</p> <p style='font-size: 15px;margin:0;'>{per}</p> <p style='font-size: 15px;margin:0;'>{infra} {desc_infra}</p> <a style='font-size:15px;color:blue;' href='/oficinas/info/{id}'>Ver Estación</a>";
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.propertyFields.href = "flag";

    //Tooltip estático
    imageSeries.tooltip.label.interactionsEnabled = true;
    imageSeries.tooltip.keepTargetHover = true;

    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    imageSeries.data = [{
        /**Gerencia RegionalCentro CDMX **/
        "latitude": 19.429762,
          "longitude": -99.137476,
          "id": "4",
          "title": "G. R. Centro (GRC CDMX)",
          "cc": "- Centro de Control",
          "tc": "- Torre de Control",
          "per": "- Personal: 419",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/01.png"
    },{
          "latitude": 19.117146,
          "longitude": -98.654339,
          "id": "4",
          "title": "Estación Altzomoni",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/02.png"
      },{
          "latitude": 19.210798,
          "longitude": -99.258360,
          "id": "4",
          "title": "Estación Ajusco",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/03.png"
      },{
          "latitude": 19.709809,
          "longitude": -98.452299,
        "id": "4",
          "title": "Estación Apan",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/04.png"
      },{
          "latitude": 19.549002,
          "longitude": -99.533256,
          "id": "4",
          "title": "Estación Cerro Catedral",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/05.png"
      },{
          "latitude": 19.463726,
          "longitude": -98.905497,
          "id": "4",
          "title": "Estación Colpos",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/06.png"
      },{
          "latitude": 19.553766,
          "longitude": -99.055656,
          "id": "4",
          "title": "Estación Cerro Gordo",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/07.png"
      },{
          "latitude": 18.777791,
          "longitude": -100.201159,
          "id": "4",
          "title": "Estación Corral de Piedras",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/08.png"
      },{
          "latitude": 18.811951,
          "longitude": -98.955628,
          "id": "4",
          "title": "Estación Cuautla",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/09.png"
      },{
          "latitude": 18.923727,
          "longitude": -99.221518,
          "id": "4",
          "title": "Estación Cuernavaca",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 16",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/10.png"
      },{
          "latitude": 20.647588,
                  "longitude": -103.385423,
          "id": "4",
          "title": "Estación Guadalajara",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/11.png"
      },{
         "latitude": 21.017948,
                  "longitude": -101.256676,
          "id": "4",
          "title": "Estación Guanajuato",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/12.png"
      },{
          "latitude": 20.337574,
          "longitude": -102.023504,
          "id": "4",
          "title": "Estación La Piedad",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/13.png"
      },{
          "latitude": 19.591954,
          "longitude": -97.095413,
          "id": "4",
          "title": "Estación Lajas",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/14.png"
      },{
         "latitude": 20.101255,
          "longitude": -98.758937,
          "id": "4",
          "title": "Estación Pachuca",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/15.png"
      },{
          "latitude": 19.657966,
          "longitude": -99.795363,
          "id": "4",
          "title": "Estación Pasteje",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/16.png"
      },{
          "latitude": 19.448713,
          "longitude": -99.128796,
          "id": "4",
          "title": "Estación Peñón",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/17.png"
      },{
          "latitude": 19.556981,
           "longitude": -97.246331,
          "id": "4",
          "title": "Estación Perote",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/18.png"
      },{
           "latitude": 20.526742,
                  "longitude": -97.462987,
          "id": "4",
          "title": "Estación Poza Rica",
          "cc": "",
          "tc": "- Torre de control",
          "per": "- Personal: 11",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/19.png"
      },{
          "latitude": 19.044039,
          "longitude": -98.197892,
          "id": "4",
          "title": "Estación Puebla",
          "cc": "",
          "tc": "- Torre de control",
          "per": "- Personal: 13",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/20.png"
      },{
          "latitude": 20.591783,
          "longitude": -100.391895,
          "id": "4",
          "title": "Estación Querétaro",
          "cc": "",
          "tc": "- Torre de control",
          "per": "- Personal: 31",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/21.png"
      },{
         "latitude": 19.893797,
                  "longitude": -99.144160,
          "id": "4",
          "title": "Estación San Mateo",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/22.png"
      },{
            "latitude": 19.748040,
                  "longitude": -98.979851,
          "id": "4",
          "title": "Estación Santa Lucía",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/23.png"
      },{
          "latitude": 22.232516,
                  "longitude": -97.861072,
          "id": "4",
          "title": "Estación Tampico",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 16",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/24.png"
      },{
          "latitude": 22.005285,
                  "longitude": -98.783768,
          "id": "4",
          "title": "Estación Tamuín",
          "cc": "",
          "tc": "",
          "per": "- Personal: 1",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/25.png"
      },{
          "latitude": 18.611285,
          "longitude": -99.259683,
          "id": "4",
          "title": "Estación Tequesquitengo",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/26.png"

      },{
          "latitude": 19.282040,
          "longitude": -99.655622,
          "id": "4",
          "title": "Estación Toluca",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 59",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/27.png"
      },{
          "latitude": 19.173182,
          "longitude": -96.134136,
          "id": "4",
          "title": "Estación Veracruz",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 32",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/28.png"
      },
      /** GRC Jefatura Regional Acapulco**/
      {
          "latitude": 16.852328,
          "longitude": -99.824018,
          "id": "4",
          "title": "Jefatura Regional Acapulco",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 50",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/29.png"
      },{
          "latitude": 15.834052,
          "longitude": -96.320425,
          "id": "4",
          "title": "Estación B. de Huatulco",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 7",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/30.png"
      },{
          "latitude": 16.759949,
                  "longitude": -96.691771,
          "id": "4",
          "title": "Estación Oaxaca",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 15",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/31.png"
      },{
            "latitude": 15.871750,
                  "longitude": -97.076856,
          "id": "4",
          "title": "Estación Pto. Escondido",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 8",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/32.png"
      },{
          "latitude": 17.643500,
                  "longitude": -101.554558,
          "id": "4",
          "title": "Estación Zihuatanejo",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 16",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/33.png"
      },
      /**GRC Jefatura Bajío (León) **/
      {
          "latitude": 21.120523,
          "longitude": -101.682582,
          "id": "4",
          "title": "Jefatura Bajío (León)",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 50",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/34.png"
      },{
          "latitude": 21.876939,
          "longitude": -102.290824,
          "id": "4",
          "title": "Estación Aguascalientes ",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 14",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/35.png"
      },{
         "latitude": 19.705245,
                  "longitude": -101.194720,
          "id": "4",
          "title": "Estación Morelia ",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 17",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/36.png"
      },{
        "latitude": 22.156338,
                  "longitude": -100.986339,
          "id": "4",
          "title": "Estación San Luis Potosí",
          "cc": "",
          "tc": "",
          "per": "- Personal: 21",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/37.png"
      },
      /**Gerencia Regional Noreste (Monterrey**/
      {
        "latitude": 25.677178,
                  "longitude": -100.313546,
          "id": "2",
          "title": "G. R. Noreste (GRNE Monterrey)",
          "cc": "",
          "tc": "",
          "per": "- Personal: 145",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/38.png"
      },{
        "latitude": 25.859620,
                  "longitude": -100.238062,
          "id": "2",
          "title": "Estación Aeropuerto del Norte",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 21",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/39.png"
      },{
        "latitude": 23.732274,
                  "longitude": -99.148668,
        "id": "2",
          "title": "Estación Cd. Victoria",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 9",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/40.png"
      },{
        "latitude": 24.871608,
                  "longitude": -100.232711,
          "id": "2",
          "title": "Estación Cerro del Potosí",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/41.png"
      },{
        "latitude": 25.868352,
                  "longitude": -97.502962,
          "id": "2",
          "title": "Estación Matamoros",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 12",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/42.png"
      },{
          "latitude": 26.899079,
                  "longitude": -101.419815,
          "id": "2",
          "title": "Estación Monclova",
          "cc": "",
          "tc": "",
          "per": "- Personal:",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/43.png"
      },{
         "latitude": 27.477084,
                  "longitude": -99.549801,
          "id": "2",
          "title": "Estación Nuevo Laredo",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 13",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/44.png"
      },{
         "latitude": 28.690908,
                  "longitude": -100.541488,
          "id": "2",
          "title": "Estación Piedras Negras",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/45.png"
      },{
           "latitude": 26.050403,
                  "longitude": -98.297905,
          "id": "2",
          "title": "Estación Reynosa",
          "cc": "",
          "tc": "- Torre de control",
          "per": "- Personal: 15",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/46.png"
      },{
          "latitude": 25.437891,
                  "longitude": -100.973723,
          "id": "2",
          "title": "Estación Saltillo",
          "cc": "",
          "tc": "",
          "per": "- Personal: 1",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/47.png"
      },{
          "latitude": 28.594347,
                  "longitude": -105.887674,
          "id": "2",
          "title": "Estación Santa Eulalia",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/48.png"
      },{
          "latitude": 27.777070,
                  "longitude": -105.729686,
          "id": "2",
          "title": "Estación Santa Gertrudis",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/49.png"
      },{
            "latitude": 22.990400,
                  "longitude": -99.720472,
          "id": "2",
          "title": "Estación Tula Tamaulipas",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/50.png"
      },{
              "latitude": 26.937103,
                  "longitude": -105.392897,
          "id": "2",
          "title": "Estación Valle de Allende",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/51.png"
      },{
             "latitude": 24.146765,
                  "longitude": -101.484771,
          "id": "2",
          "title": "Estación San Tiburcio",
          "cc": "",
          "tc": "",
          "per": "- Personal: 1",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/52.png"
      },
      /**GRNE Jefatura Regional Chihuahua**/
      {
             "latitude": 28.631534,
                  "longitude": -106.069501,
          "id": "2",
          "title": "Jefatura Regional Chihuahua",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 43",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/53.png"
      },{
            "latitude": 31.683553,
                  "longitude": -106.419842,
          "id": "2",
          "title": "Estación Cd. Juárez",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 16",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/54.png"
      },{
            "latitude": 25.542175,
                  "longitude": -103.406773,
          "id": "2",
          "title": "Estación Torreón",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 16",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/55.png"
      },
      /**Gerencia Regional Noroeste (Mazatlán)**/
      {
            "latitude": 23.245217,
                  "longitude": -106.411433,
          "id": "1",
          "title": "G. R. Noroeste (GRNW Mazatlán)",
          "cc": "- Centro de Control",
          "tc": "- Torre de Control",
          "per": "- Personal: 143",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/56.png"
      },{
           "latitude": 22.894108,
                  "longitude": -109.979867,
          "id": "1",
          "title": "Estación Cabo San Lucas",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 8",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/57.png"
      },{
           "latitude": 27.471164,
                  "longitude": -109.932653,
        "id": "1",
          "title": "Estación Cd. Obregón",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 11",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/58.png"
      },{
           "latitude": 24.804656,
          "longitude": -107.396070,
          "id": "1",
          "title": "Estación Culiacán ",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 30",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/59.png"
      },{
             "latitude": 23.935072,
                  "longitude": -104.650923,
          "id": "1",
          "title": "Estación Durango ",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 12",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/60.png"
      },{
            "latitude": 27.913099,
                  "longitude": -110.910216,
          "id": "1",
          "title": "Estación Guaymas ",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 7",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/61.png"
      },{
            "latitude": 24.141994,
                  "longitude": -110.312619,
          "id": "1",
          "title": "Estación La Paz ",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 17",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/62.png"
      },{
           "latitude": 23.751906,
                  "longitude": -105.533879,
          "id": "1",
          "title": "Estación Las Rusias",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/63.png"
      },{
            "latitude": 25.792010,
                  "longitude": -108.989049,
          "id": "1",
          "title": "Estación Los Monchis",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 12",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/64.png"
      },{
           "latitude": 23.063015,
                  "longitude": -109.702248,
          "id": "1",
          "title": "Estación San José del Cabo",
          "cc": "- Centro de Control",
          "tc": "- Torre de Control",
          "per": "- Personal: 29",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/65.png"
      },

      /**GRNW Jefatura Regional Tijuana**/
      {
           "latitude": 32.514031,
                  "longitude": -117.038701,
          "id": "1",
          "title": "Jefatura Regional Tijuana",
          "cc": "- Centro de Control",
          "tc": "- Torre de Control",
          "per": "- Personal: 55",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/66.png"
      },{
           "latitude": 29.079529,
                  "longitude": -110.953394,
          "id": "1",
          "title": "Estación Hermosillo",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 32",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/67.png"
      },{
          "latitude": 26.011344,
                  "longitude": -111.347762,
          "id": "1",
          "title": "Estación Loreto",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 5",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/68.png"
      },{
          "latitude": 32.623950,
                  "longitude": -115.452659,
          "id": "1",
          "title": "Estación Mexicalli",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 15",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/69.png"
      },{
          "latitude": 31.318868,
                  "longitude": -113.535788,
          "id": "1",
          "title": "Estación Puerto Peñasco",
          "cc": "",
          "tc": "",
          "per": "- Personal: 9",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/70.png"
      },{
          "latitude": 30.561950,
                  "longitude": -115.938429,
          "id": "1",
          "title": "Estación San Quintín",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 5",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/71.png"
      },
      /**Gerencia Regional Sureste (Mérida)**/
      {
         "latitude": 20.964142,
                  "longitude": -89.630450,
          "id":"5",
          "title": "G. R. Sureste (GRSE Mérida)",
          "cc": "- Centro de Control",
          "tc": "- Torre de Control",
          "per": "- Personal: 143",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/72.png"
      },{
         "latitude": 19.829165,
                  "longitude": -90.534974,
          "id":"5",
          "title": "Estación Campeche",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 7",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/73.png"
      },{
         "latitude": 18.649481,
                  "longitude": -91.807805,
          "id":"5",
          "title": "Estación Cd. del Carmen",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 17",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/74.png"
      },{
         "latitude": 20.698505,
                  "longitude": -88.589407,
          "id":"5",
          "title": "Estación Cd. de Piste (Chichen - Itza)",
          "cc": "",
          "tc": "",
          "per": "- Personal:",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/75.png"
      },{
         "latitude": 17.992010,
                  "longitude": -94.546226,
          "id":"5",
          "title": "Estación Minatitlán",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 6",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/76.png"
      },{
         "latitude": 17.510659,
                  "longitude": -91.993210,
          "id":"5",
          "title": "Estación Palenque",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 3",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/77.png"
      },{
         "latitude": 14.907899,
                  "longitude": -92.261996,
          "id":"5",
          "title": "Estación Tapachula",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 12",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/78.png"
      },{
         "latitude": 16.750629,
                  "longitude": -93.103113,
          "id":"5",
          "title": "Estación Tuxtla Gutiérrez",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 13",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/79.png"
      },{
         "latitude": 17.985319,
                  "longitude": -92.946797,
          "id":"5",
          "title": "Estación Villa Hermosa",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 19",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/80.png"
      },
      /** GRSE Jefatura Regional Cancún**/
      {
         "latitude": 21.160181,
                  "longitude": -86.851655,
          "id":"5",
          "title": "Jefatura Regional Cancún",
          "cc": "- Centro de Control",
          "tc": "- Torre de Control",
          "per": "- Personal: 76",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/81.png"
      },{
           "latitude": 18.503903,
          "longitude": -88.298274,
          "id":"5",
          "title": "Estación Chetumal",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 7",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/82.png"
      },{
           "latitude": 20.506061,
                  "longitude": -86.944795,
          "id":"5",
          "title": "Estación Cozumel",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 16",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/83.png"
      },
        /**Gerencia Regional Occidente Guadalajara**/
      {
           "latitude": 20.675136,
                  "longitude": -103.304861,
          "id":"3",
          "title": "G. R. Occidente (GRO Guadalajara)",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 111",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/84.png"
      },{
           "latitude": 19.243154,
                  "longitude": -103.724219,
          "id":"3",
          "title": "Estación Colima",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 5",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/85.png"
      },{
           "latitude": 20.654178,
                  "longitude": -105.217669,
          "id":"3",
          "title": "Estación Puerto Vallarta",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 42",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/86.png"
      },{
           "latitude": 21.503802,
                  "longitude": -104.894840,
          "id":"3",
          "title": "Estación Tepic",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 10",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/87.png"
      },{
          "latitude": 19.404057,
                  "longitude": -102.043900,
          "id":"3",
          "title": "Estación Uruapan",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 6",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/88.png"
      },{
          "latitude": 22.768848,
                  "longitude": -102.583982,
          "id":"3",
          "title": "Estación Zacatecas",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 10",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
         "flag": "./././assets/img/ubicaciones/89.png"
      },{
          "latitude": 19.115993,
                  "longitude": -104.336612,
          "id":"3",
          "title": "Estación Manzanillo",
          "cc": "",
          "tc": "- Torre de Control",
          "per": "- Personal: 7",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/90.png"
      },{
          "latitude": 20.748719,
                  "longitude": -103.361999,
          "id":"3",
          "title": "Estación Zapopan",
          "cc": "",
          "tc": "",
          "per": "- Personal: ",
          "infra": "- Infraestructura:",
          "desc_infra": " Descripción de Infraestructura",
          "flag": "./././assets/img/ubicaciones/91.png"
      }];
}


}
