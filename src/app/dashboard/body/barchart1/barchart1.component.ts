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
  ApexGrid,
  ApexXAxis,
  ApexMarkers,
  ApexTitleSubtitle
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

// export type ChartOptions = {
//   series: ApexAxisChartSeries | any;
//   chart: ApexChart | any;
//   xaxis: ApexXAxis | any;
//   dataLabels: ApexDataLabels | any;
//   grid: ApexGrid | any;
//   fill: ApexFill | any;
//   markers: ApexMarkers | any;
//   yaxis: ApexYAxis | any;
//   stroke: ApexStroke | any;
//   title: ApexTitleSubtitle | any;
// };



@Component({
  selector: 'app-barchart1',
  templateUrl: './barchart1.component.html',
  styleUrls: ['./barchart1.component.css']
})
export class Barchart1Component implements OnInit {


  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Servings",
          data: [41, 67, 22, 43, 21, 33, 45, 31, 87, 65]
        }
      ],
      chart: {
        height: 350,
        // width: 580,
        type: "bar",
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "25%",
          // horizontal: false,  
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
          "-10",
          "-9",
          "-8",
          "-7",
          "-6",
          "-5",
          "-4",
          "-3",
          "-2",
          "-1"
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
          /*shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]*/
        }
      }
    };


  }
  ngOnInit(): void {
  }

//   @ViewChild("chart") chart!: ChartComponent;
//   public chartOptions!: Partial<ChartOptions>;

// ngOnInit() {
 
// }

// constructor() { 

//   this.chartOptions = {
//     series: [
//       {
//         name: "Likes",
//         data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
//       }
//     ],
//     chart: {
//       height: 250,
//       // width:450,
//       type: "line",
//       toolbar: {
//            show: false
//           },
          
//             // border: 20,
//     },
//     stroke: {
//       width: 7,
//       curve: "smooth"
//     },
//     xaxis: {
//       type: "datetime",
//       categories: [
//         "1/11/2000",
//         "2/11/2000",
//         "3/11/2000",
//         "4/11/2000",
//         "5/11/2000",
//         "6/11/2000",
//         "7/11/2000",
//         "8/11/2000",
//         "9/11/2000",
//         "10/11/2000",
//         "11/11/2000",
//         "12/11/2000",
//         "1/11/2001",
//         "2/11/2001",
//         "3/11/2001",
//         "4/11/2001",
//         "5/11/2001",
//         "6/11/2001"
//       ]
//     },
//     title: {
//       text: "Social Media",
//       align: "left",
//       style: {
//         fontSize: "12px",
//         color: "#588"
//       }
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "dark",
//         gradientToColors: ["#FDD835"],
//         shadeIntensity: 1,
//         type: "horizontal",
//         opacityFrom: 1,
//         opacityTo: 1,
//         stops: [0, 100, 100, 100]
//       }
//     },
//     markers: {
//       size: 4,
//       colors: ["#FFA41B"],
//       strokeColors: "#fff",
//       strokeWidth: 2,
//       hover: {
//         size: 7
//       }
//     },
//     yaxis: {
//       min: -10,
//       max: 40,
//       title: {
//         text: "Subcribers"
//       }
//     }
//   };
// }


}
