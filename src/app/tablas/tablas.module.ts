/**Descripcion: Este archivo define el módulo TablasModule que agrupa todo lo relacionado con las tablas de mediciones,
 * incluyendo el componente TablasComponent y las dependencias necesarias.
Autor: Diego Andres Peñuela Pardo
Copyright (c) 2023 Diego Andres Peñuela Pardo. Todos los derechos reservados. Última actualización: 17 de Mayo de 2023 */

import { NgModule } from '@angular/core'; // Importación de NgModule, que permite definir módulos en Angular
import { CommonModule } from '@angular/common'; // Importación de CommonModule, que provee las directivas básicas de Angular
import { TablasComponent } from './tablas.component'; // Importación del componente TablasComponent
import { HttpClientModule } from '@angular/common/http'; // Importación de HttpClientModule, que permite hacer peticiones HTTP
import { TableModule } from 'primeng/table'; // Importación de TableModule, que permite crear tablas con PrimeNG

@NgModule({ // Decorador que marca a TablasModule como un módulo de Angular y proporciona metadatos de configuración
  declarations: [ // Los componentes, directivas y pipes que pertenecen a este módulo
    TablasComponent // Se declara que TablasComponent pertenece a este módulo
  ],
  imports: [ // Otros módulos cuyas clases exportadas son necesarias para las plantillas de componentes de este módulo
    CommonModule, // Se importa CommonModule para poder utilizar las directivas básicas de Angular
    HttpClientModule, // Se importa HttpClientModule para poder hacer peticiones HTTP
    TableModule // Se importa TableModule para poder crear tablas con PrimeNG
  ],
  exports:[ // Los componentes, directivas y pipes que pertenecen a este módulo y que deben ser accesibles desde otros módulos
    TablasComponent // Se exporta TablasComponent para que pueda ser utilizado en otros módulos
  ]
})
export class TablasModule { } // Declaración de la clase TablasModule
