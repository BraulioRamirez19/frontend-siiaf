import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_mexicoNoroeste from "@amcharts/amcharts4-geodata/mexicoNoroeste";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-noroeste',
  templateUrl: './noroeste.component.html',
  styleUrls: ['./noroeste.component.css']
})
export class NoroesteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_mexicoNoroeste;

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

    imageSeries.data = [/**Gerencia Regional Noroeste (Mazatlán)**/
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
    }];
  }

}
