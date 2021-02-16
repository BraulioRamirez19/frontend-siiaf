import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_mexicoOccidente from "@amcharts/amcharts4-geodata/mexicoOccidente";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-occidente',
  templateUrl: './occidente.component.html',
  styleUrls: ['./occidente.component.css']
})
export class OccidenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_mexicoOccidente;

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

    imageSeries.data = [/**Gerencia Regional Occidente Guadalajara**/
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
