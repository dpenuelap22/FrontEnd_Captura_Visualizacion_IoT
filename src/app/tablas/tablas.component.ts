/**
* Descripción: Este archivo define la lógica del componente Tablas de la aplicación,
* que se encarga de gestionar la lista de mediciones y la presentación de las mismas en tablas.
* Autor: Diego Andres Peñuela Pardo
* Copyright (c) 2023 Diego Andres Peñuela Pardo. Todos los derechos reservados. Última actualización: 17 de Mayo de 2023
*/
import { Component, OnInit } from '@angular/core'; // Importación de los módulos Component y OnInit de Angular
import { TablasService } from '../servicio/medicion.service'; // Importación del servicio TablasService que gestiona las peticiones a la API
import { Tablas } from '../modelo/medicion.model'; // Importación del modelo Tablas que define la estructura de los datos de las mediciones

@Component({ // Decorador que marca a TablasComponent como un componente de Angular y proporciona metadatos de configuración
  selector: 'app-tablas', // El selector que se utiliza para insertar este componente en otras plantillas
  templateUrl: './tablas.component.html', // Ruta al archivo de la plantilla de este componente
  styleUrls: ['./tablas.component.css'] // Rutas a los archivos de estilos de este componente
})
export class TablasComponent implements OnInit { // Declaración de la clase TablasComponent que implementa la interfaz OnInit de Angular
  tablas:Tablas[]=[]; // Declaración de la propiedad tablas, que es un array de mediciones

  constructor(private tablaService:TablasService) { } // Inyección del servicio TablasService en el constructor

  ngOnInit(): void { // Método que se ejecuta cuando se inicializa el componente
    this.getTablasList(); // Llamada al método getTablasList que recupera la lista de mediciones de la API
  }

  getTablasList(){ // Declaración del método getTablasList
    this.tablaService.getTablas().subscribe( // Llamada al método getTablas del servicio y subscripción al Observable que devuelve
      response =>{ // Función que se ejecuta cuando el Observable emite un valor
        this.tablas=response; // Asignación del valor emitido a la propiedad tablas
        // La siguiente línea es la que hace la diferencia: ordena las tablas por fecha
        this.tablas.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
      }
    )
  }
}


