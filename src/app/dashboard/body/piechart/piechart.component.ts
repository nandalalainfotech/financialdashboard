import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries| any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
};



@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  ngOnInit(): void {
  }
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

 
  constructor() {
    this.chartOptions = {
      series: [44, 55, 13,],
      chart: {
 
        // width: 520,
        height:800,
        type: "pie"
      },
      labels: ["MM/ML", "LL Shopify", "Sample", ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}