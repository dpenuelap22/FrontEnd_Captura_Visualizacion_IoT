/*********************************************************************************************
Descripcion: Este archivo define el módulo AppRoutingModule que maneja las rutas de la aplicación.
Autor: Diego Andres Peñuela Pardo
Copyright (c) 2023 Diego Andres Peñuela Pardo. Todos los derechos reservados. Última actualización: 17 de Mayo de 2023
********************************************************************************************/

// Se importa el módulo NgModule de Angular, que es necesario para definir un nuevo módulo.
import { NgModule } from '@angular/core';

// Se importa RouterModule y Routes de la biblioteca de enrutamiento de Angular.
// RouterModule es un módulo que proporciona los servicios necesarios para la navegación.
// Routes es un alias para una matriz de objetos de ruta.
import { RouterModule, Routes } from '@angular/router';

// Se define una constante "routes" como una matriz vacía. Aquí es donde normalmente se definirían todas las rutas de la aplicación.
const routes: Routes = [];

// Se define un nuevo módulo, AppRoutingModule. Este módulo importa y exporta RouterModule y su configuración.
// RouterModule.forRoot(routes) es una función que se encarga de proporcionar la configuración de enrutamiento al módulo principal de la aplicación.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

