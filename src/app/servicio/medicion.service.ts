/*********************************************************************************************
Descripción: Este archivo define el servicio TablasService, el cual es usado para hacer llamadas HTTP y obtener datos.
Este servicio se inyecta en otras partes de la aplicación donde se necesite acceder a estos datos.
La función getTablas realiza una petición GET a la API http://localhost:8080/api/medida/Datos y devuelve un
observable con un array de objetos Tablas.Este servicio está disponible a nivel global en la aplicación
 debido a que el decorador Injectable tiene la propiedad
 providedIn configurada como 'root'.
Autor: Tu nombre
Copyright (c) 2023 Tu nombre. Todos los derechos reservados. Última actualización: 17 de Mayo de 2023
********************************************************************************************/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tablas } from '../modelo/medicion.model';


@Injectable({
  providedIn: 'root'
})
export class TablasService {

  private apiUrl = 'http://localhost:8080/api/medida/Datos';

  constructor(private http:HttpClient) { }

  // Realiza una petición GET a la API de Spring Boot y devuelve un observable de array de objetos Tablas
  getTablas():Observable<Tablas[]>{
    return this.http.get<Tablas[]>(this.apiUrl)
  }

}
