import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_mexicoCentro from "@amcharts/amcharts4-geodata/mexicoCentro";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_mexicoCentro;

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
    marker.tooltipHTML = '<b>{title}</b> <p style="font-size: 15px;margin:0;">{cc}</p> <p style="font-size: 15px;margin:0;">{tc}</p> <p style="font-size: 15px;margin:0;">{per}</p> <p style="font-size: 15px;margin:0;">{infra} {desc_infra}</p> <a style="font-size:15px;color:blue;" href="/oficinas/info/{id}"">Ver Estación</a>';
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.propertyFields.href = "flag";

    //Tooltip estático
    imageSeries.tooltip.label.interactionsEnabled = true;
    imageSeries.tooltip.keepTargetHover = true;

    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    imageSeries.data=[{/**Gerencia RegionalCentro CDMX **/
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
    }];
  }

}
