/*********************************************************************************************
Descripción: Este archivo define la interfaz Tablas, que representa la estructura y los tipos de datos de un objeto Tablas.
Cada objeto Tablas debe tener las propiedades id, potencia, corriente, voltaje, fecha, horaInicio, horaFin, y consumo con sus respectivos tipos.
Esta interfaz es utilizada por otros componentes y servicios para garantizar la consistencia en la estructura de los datos.
Autor: Diego Andres Peñuela Pardo
Copyright (c) 2023 Diego Andres Peñuela Pardo. Todos los derechos reservados. Última actualización: 17 de Mayo de 2023
********************************************************************************************/
export interface Tablas {
  id: number;// Identificador único del registro de la tabla
  potencia: number;// Identificador único del registro de la tabla
  corriente: number;// Valor de la corriente medida
  voltaje: number;// Valor del voltaje medido
  fecha: string;// Fecha de la medición
  horaInicio: string;// Hora de inicio de la medición
  horaFin: string;// Hora de finalización de la medición
  consumo: number;// Consumo de energía calculado
}


