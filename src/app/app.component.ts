/*********************************************************************************************
Descripcion: Este archivo define el componente principal de la aplicación Angular, AppComponent. Incluye la funcionalidad para crear
y manipular las gráficas de Voltaje, Corriente y Potencia, y para interactuar con los botones de la interfaz de usuario que permiten mostrar y ocultar estas gráficas.
Autor: Diego Andres Peñuela Pardo
Copyright (c) 2023 Diego Andres Peñuela Pardo. Todos los derechos reservados. Última actualización: 17 de Mayo de 2023
********************************************************************************************/
// Importando las librerías necesarias
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Observable, interval, switchMap } from 'rxjs';
import { TablasService } from './servicio/medicion.service';
import { SeriesLineOptions } from 'highcharts';
// Definición de la interfaz de los datos recibidos de la API
interface TablaData {
  fecha: string;
  horaInicio: string;
  voltaje: number;
  corriente: number;
  potencia: number;

}
// Decorador del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Declaración de la clase del componente
export class AppComponent {
  VoltajePlot: Chart;
  CorrientePlot: Chart;
  PotenciaPlot: Chart;
  // Constructor del componente
  constructor(private http: HttpClient, private tablasService: TablasService) {
        // Inicialización de los gráficos

    this.VoltajePlot = new Chart({
      // Configuración del gráfico
      chart: {
        type: 'line'
      },
      title: {
        text: 'Voltaje'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 24 * 3600 * 1000, // Intervalo de un día
        labels: {
            format: '{value:%Y-%m-%d}', // Formato de fecha
        },

      },
      plotOptions: {
        series: {
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#1B59F8'],
              [1, '#808080']
            ]
          },
          lineWidth: 2,
          marker: {
            enabled: true, // Habilita los marcadores
            radius: 4 // Ajusta el tamaño de los marcadores según sea necesario
          }
        }
      },
      series: [{
        type: 'line',
        name: 'Voltaje medido',
        data: []
      } as SeriesLineOptions]
    }),

  // Inicialización de los gráficos
  this.CorrientePlot = new Chart({
    // Configuración del gráfico
    chart: {
      type: 'line' // Vuelve a 'line'
    },
    title: {
      text: 'Corriente'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      tickInterval: 24 * 3600 * 1000, // Intervalo de un día
        labels: {
            format: '{value:%Y-%m-%d}', // Formato de fecha
        },

    },
    plotOptions: {
      series: {
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#FEE719'],
            [1, '#808080']
          ]
        },
        lineWidth: 2,
        marker: {
          enabled: true, // Habilita los marcadores
          radius: 4 // Ajusta el tamaño de los marcadores según sea necesario
        }
      }
    },
    series: [{
      type: 'line',
      name: 'Corriente medida',
      data: []
    } as SeriesLineOptions]
  });
    this.PotenciaPlot = new Chart({
      // Configuración del gráfico
      chart: {
        type: 'line'
      },
      title: {
        text: 'Potencia'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 24 * 3600 * 1000, // Intervalo de un día
        labels: {
            format: '{value:%Y-%m-%d}', // Formato de fecha
        },

      },
      plotOptions: {
        series: {
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#1FF81B'],
              [1, '#808080']
            ]
          },
          lineWidth: 2,
          marker: {
            enabled: true, // Habilita los marcadores
            radius: 4 // Ajusta el tamaño de los marcadores según sea necesario
          }
        }
      },

      series: [{
        type: 'line',
        name: 'Potencia medida',
        data: []
      } as SeriesLineOptions]
    });
    this.updateVoltajePlotData();
    this.updateCorrientePlotData();
    this.updatePotenciaPlotData();
  }
 // Declaración de las variables del componente
  title = 'FrontEnd_Captura_Visualizacion_IoT';
  textoBotonCorriente: string = 'VISUALIZAR GRAFICA DE CORRIENTE';
  textoBotonVoltaje: string = 'VISUALIZAR GRAFICA DE VOLTAJE';
  textoBotonPotencia: string = 'VISUALIZAR GRAFICA DE POTENCIA';
  DisplayPlotCorriente: boolean = true;
  DisplayPlotVoltaje: boolean = true;
  DisplayPlotPotencia: boolean = true;
  logo = "./assets/unnamed.jpg";

    // Método para actualizar los datos del gráfico de voltaje
    updateVoltajePlotData() {
      interval(8000).pipe(
        switchMap(() => this.tablasService.getTablas())
      ).subscribe(
        (data: TablaData[]) => {
          const voltajeData = data
            .sort((a, b) => new Date(`${a.fecha} ${a.horaInicio}`).getTime() - new Date(`${b.fecha} ${b.horaInicio}`).getTime())
            .map(d => {
              // Convertir la fecha a un timestamp (número de milisegundos desde la Época Unix)
              const timestampInicio = new Date(`${d.fecha} ${d.horaInicio}`);
              timestampInicio.setHours(timestampInicio.getHours() - 5);
              return [timestampInicio.getTime(), d.voltaje];
            });
          if (this.VoltajePlot.ref && this.VoltajePlot.ref.series[0]) {
            this.VoltajePlot.ref.series[0].setData(voltajeData, true);
          }
        },
        err => console.error(err)
      );
    }
  // Similar al gráfico de Voltaje pero con diferentes datos y colores
  updateCorrientePlotData() {
    interval(8000).pipe(
      switchMap(() => this.tablasService.getTablas())
    ).subscribe(
      (data: TablaData[]) => {
        const corrienteData = data
          .sort((a, b) => new Date(`${a.fecha} ${a.horaInicio}`).getTime() - new Date(`${b.fecha} ${b.horaInicio}`).getTime())
          .map(d => {
            // Convertir la fecha a un timestamp (número de milisegundos desde la Época Unix)
            const timestampInicio = new Date(`${d.fecha} ${d.horaInicio}`);
            timestampInicio.setHours(timestampInicio.getHours() - 5);
            return [timestampInicio.getTime(), d.corriente];
          });
        if (this.CorrientePlot.ref && this.CorrientePlot.ref.series[0]) {
          this.CorrientePlot.ref.series[0].setData(corrienteData, true);
        }
      },
      err => console.error(err)
    );
  }


  // Similar a los gráficos de Voltaje y Corriente pero con diferentes datos y colores
  updatePotenciaPlotData() {
    interval(8000).pipe(
      switchMap(() => this.tablasService.getTablas())
    ).subscribe(
      (data: TablaData[]) => {
        const potenciaData = data
          .sort((a, b) => new Date(`${a.fecha} ${a.horaInicio}`).getTime() - new Date(`${b.fecha} ${b.horaInicio}`).getTime())
          .map(d => {
            // Convertir la fecha a un timestamp (número de milisegundos desde la Época Unix)
            const timestampInicio = new Date(`${d.fecha} ${d.horaInicio}`);
            timestampInicio.setHours(timestampInicio.getHours() - 5);
            return [timestampInicio.getTime(), d.potencia];
          });
        if (this.PotenciaPlot.ref && this.PotenciaPlot.ref.series[0]) {
          this.PotenciaPlot.ref.series[0].setData(potenciaData, true);
        }
      },
      err => console.error(err)
    );
  }









  // Funciones que se llaman cuando se hace clic en los botones de la interfaz de usuario. Cambian el estado de la gráfica correspondiente y el texto del botón
  OcultarCorriente(){
    this.DisplayPlotCorriente = !this.DisplayPlotCorriente;
    this.textoBotonCorriente = this.textoBotonCorriente.startsWith('VISUALIZAR') ? 'OCULTAR GRAFICA DE CORRIENTE' : 'VISUALIZAR GRAFICA DE CORRIENTE';
  }
  OcultarVoltaje(){
    this.DisplayPlotVoltaje = !this.DisplayPlotVoltaje;
    this.textoBotonVoltaje = this.textoBotonVoltaje.startsWith('VISUALIZAR') ? 'OCULTAR GRAFICA DE VOLTAJE' : 'VISUALIZAR GRAFICA DE VOLTAJE';
  }
  OcultarPotencia(){
    this.DisplayPlotPotencia = !this.DisplayPlotPotencia;
    this.textoBotonPotencia = this.textoBotonPotencia.startsWith('VISUALIZAR') ? 'OCULTAR GRAFICA DE POTENCIA' : 'VISUALIZAR GRAFICA DE POTENCIA';
  }

}
