# Proyecto SIIAF para SENEAM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Herramientas necesarias para descargar e instalar

1. [GIT](https://git-scm.com/downloads) como Repositorio.
2. [NodeJS](https://nodejs.org/es/download/) como ambiente de desarrollo.

npm install -g typescript

npm install -g @angular/cli

## Cómo levantar este proyecto

Deberán realizar un `Fork` de este repositorio a su cuenta de GitHub. 

> Nota: Es imperativo que una vez realizado el `Fork` y éste se encuentre en sus proyectos modifiquen el acceso al código fuente mediante la opción `Settings|Danger Zone|Change visibility`, con el fin de mantener oculto el proyecto.

git clone [URL del proyecto en su cuenta GitHub]

npm install bootstrap jquery popper.js

```json
"projects": {
    ...
    "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.slim.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    ...
}
```

## Instalación de amcharts4
[amcharts](https://www.amcharts.com/download/)
1. npm install @amcharts/amcharts4
2. npm install @amcharts/amcharts4-geodata
3. npm install @amcharts/amcharts4-fonts

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

