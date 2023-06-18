/*********************************************************************************************
Descripcion: Este archivo define el componente principal de la aplicación Angular, AppComponent.
Incluye la funcionalidad para crear y manipular las gráficas de Voltaje, Corriente y Potencia,
y para interactuar con los botones de la interfaz de usuario que permiten mostrar y ocultar
estas gráficas. Además, este archivo establece el módulo principal AppModule, que encapsula
todos los componentes y servicios utilizados en la aplicación, e importa todos los módulos
necesarios desde diferentes bibliotecas.
Autor: Diego Andres Peñuela Pardo
Copyright (c) 2023 Diego Andres Peñuela Pardo. Todos los derechos reservados. Última actualización: 17 de Mayo de 2023
********************************************************************************************/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { TablasModule } from "./tablas/tablas.module";

// AppModule encapsula todos los componentes y servicios utilizados en la aplicación
@NgModule({
    declarations: [
        AppComponent,  // AppComponent es el componente principal
    ],
    providers: [], // Proveedores de servicios a nivel de módulo
    bootstrap: [AppComponent], // Componente de arranque de la aplicación
    imports: [
        BrowserModule, // BrowserModule proporciona servicios esenciales para las aplicaciones que se ejecutan en un navegador
        AppRoutingModule, // AppRoutingModule proporciona las funcionalidades de enrutamiento
        ChartModule, // ChartModule proporciona las funcionalidades para crear y manejar gráficos
        HttpClientModule, // HttpClientModule permite realizar llamadas HTTP
        TableModule, // TableModule permite visualizar las tablas
        TablasModule // TablasModule es un módulo personalizado que es parte de la aplicación
    ]
})
export class AppModule { }
