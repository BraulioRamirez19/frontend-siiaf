import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_mexicoSureste from "@amcharts/amcharts4-geodata/mexicoSureste";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-sureste',
  templateUrl: './sureste.component.html',
  styleUrls: ['./sureste.component.css']
})
export class SuresteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_mexicoSureste;

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

    imageSeries.data = [/**Gerencia Regional Sureste (Mérida)**/
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
        "flag": "././././assets/img/ubicaciones/72.png"
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
        "flag": "././././assets/img/ubicaciones/73.png"
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
        "flag": "././././assets/img/ubicaciones/74.png"
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
        "flag": "././././assets/img/ubicaciones/75.png"
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
        "flag": "././././assets/img/ubicaciones/76.png"
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
        "flag": "././././assets/img/ubicaciones/77.png"
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
        "flag": "././././assets/img/ubicaciones/78.png"
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
        "flag": "././././assets/img/ubicaciones/79.png"
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
        "flag": "././././assets/img/ubicaciones/80.png"
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
        "flag": "././././assets/img/ubicaciones/81.png"
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
        "flag": "././././assets/img/ubicaciones/82.png"
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
        "flag": "././././assets/img/ubicaciones/83.png"
    }]
  }

}
