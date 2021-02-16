import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_mexicoNoreste from "@amcharts/amcharts4-geodata/mexicoNoreste";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-noreste',
  templateUrl: './noreste.component.html',
  styleUrls: ['./noreste.component.css']
})
export class NoresteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_mexicoNoreste;

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

    imageSeries.data = [/**Gerencia Regional Noreste (Monterrey**/
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
    }];
  }

}
