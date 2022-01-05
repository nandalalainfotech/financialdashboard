import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations | any;
  fill: ApexFill | any;
  stroke: ApexStroke | any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-barchart3',
  templateUrl: './barchart3.component.html',
  styleUrls: ['./barchart3.component.css']
})
export class Barchart3Component implements OnInit {

  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Servings",
          data: [87, 65, 35]
        }
      ],
      chart: {
        height: 250,
        // width: 190,
        type: "bar",
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "25%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "Sep", 
          "Oct", 
          "Nov",
        ],
        tickPlacement: "on"
      },
      yaxis: {
        // title: {
        //   text: "Servings"
        // }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          // shade: "light",
          // type: "horizontal",
          // shadeIntensity: 0.25,
          // gradientToColors: undefined,
          // inverseColors: true,
          // opacityFrom: 0.85,
          // opacityTo: 0.85,
          // stops: [50, 0, 100]
        }
      }
    };


  }
  ngOnInit(): void {
  }
}


