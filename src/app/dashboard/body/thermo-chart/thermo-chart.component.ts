import { Component } from '@angular/core';
// import * as FusionCharts from 'fusioncharts';
const data = {
  chart: {
    caption: "Car Engine Temperature",
    subcaption: "(Per Quarter minute)",
    lowerlimit: "200",
    upperlimit: "200",
    numbersuffix: "°F",
    thmfillcolor: "#008ee4",
    showgaugeborder: "1",
    gaugebordercolor: "#008ee4",
    gaugeborderthickness: "2",
    plottooltext: "Temperature: <b>$datavalue</b> ",
    theme: "fusion",
    showvalue: "1"
  },
  value: "140"
};
@Component({
  selector: 'app-thermo-chart',
  templateUrl: './thermo-chart.component.html',
  styleUrls: ['./thermo-chart.component.css']
})
export class ThermoChartComponent {


 
  constructor() { }
 

  ngOnInit(): void {
    
  }
  width:string= "300";
  height:string ="300" ;
 type = "thermometer";
  dataFormat = "json";
  dataSource = data;
}

