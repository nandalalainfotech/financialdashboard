import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import { NgApexchartsModule } from "ng-apexcharts";
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { BarChartModule } from 'ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Barchart1Component } from './body/barchart1/barchart1.component';
import { Barchart3Component } from './body/barchart3/barchart3.component';
import { PiechartComponent } from './body/piechart/piechart.component';
import { ProcesscardComponent } from './body/processcard/processcard.component';
import { ThermoChartComponent } from './body/thermo-chart/thermo-chart.component';
import { ThermoprogressComponent } from './body/thermoprogress/thermoprogress.component';
import { ThermoprogresscardComponent } from './body/thermoprogresscard/thermoprogresscard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LogTableComponent } from './body/log-table/log-table.component';
import { TranslateModule } from '@ngx-translate/core';





// import { FusionChartsModule } from 'angular-fusioncharts';

// // Load FusionCharts
// import * as FusionCharts from 'fusioncharts';

// // Load Maps  
// import * as Maps from 'fusioncharts/fusioncharts.maps';

// // Load WorldMap definition
// import * as World from 'fusioncharts/maps/fusioncharts.world';

// // Load FusionTheme theme
// import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// // Add dependencies for FusionChartsModule
// FusionChartsModule.fcRoot(FusionCharts, Maps, World, FusionTheme)

// import * as Charts from 'fusioncharts/fusioncharts.charts';



@NgModule({
  declarations: [
    Barchart1Component,
    Barchart3Component,
    PiechartComponent,
    ProcesscardComponent,
    ThermoChartComponent,

    ThermoprogressComponent,
    ThermoprogresscardComponent,
    LogTableComponent,


    //  CardProgressTableComponent,


  ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    BarChartModule,
    PerfectScrollbarModule,
    FusionChartsModule,
    ProgressbarModule.forRoot(),
    TranslateModule.forRoot(),
    // PerfectScrollbarModule,
    // NgxChartsModule
    // FusionCharts,
    // FusionChartsModule,
    // // FusionChartsModule.forRoot(FusionCharts),
    // FusionChartsModule.forRoot(FusionCharts, Charts)
  ],
  exports: [

    FusionChartsModule,
  ],
})
export class DashboardModule { }
