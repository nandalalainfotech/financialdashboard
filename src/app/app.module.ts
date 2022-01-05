import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarChartModule } from '@swimlane/ngx-charts';
import { FusionChartsModule } from 'angular-fusioncharts';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import * as FusionCharts from 'fusioncharts';
// import * as FusionCharts from 'fusioncharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Barchart1Component } from './dashboard/body/barchart1/barchart1.component';
import { Barchart2Component } from './dashboard/body/barchart2/barchart2.component';
import { Barchart3Component } from './dashboard/body/barchart3/barchart3.component';
import { BodyComponent } from './dashboard/body/body.component';
import { PiechartComponent } from './dashboard/body/piechart/piechart.component';
import { ProcesscardComponent } from './dashboard/body/processcard/processcard.component';
import { ThermoChartComponent } from './dashboard/body/thermo-chart/thermo-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import * as Chart from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from "fusioncharts/fusioncharts.widgets";
import { ThermoprogresscardComponent } from './dashboard/body/thermoprogresscard/thermoprogresscard.component';
import { ThermoprogressComponent } from './dashboard/body/thermoprogress/thermoprogress.component';
import { CardProgressTableComponent } from './dashboard/body/card-progress-table/card-progress-table.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LogTableComponent } from './dashboard/body/log-table/log-table.component';
import { TranslateModule } from '@ngx-translate/core';
FusionChartsModule.fcRoot(FusionCharts, Chart, FusionTheme, Widgets);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Barchart1Component,
    Barchart2Component,
    Barchart3Component,
    PiechartComponent,
    ProcesscardComponent,
    ThermoChartComponent,
    ThermoprogresscardComponent,
    ThermoprogressComponent,
    LogTableComponent

    // CardProgressTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    // NgxChartsModule,
    BarChartModule,
    PerfectScrollbarModule,
    // ProgressbarModule.forRoot(),
    RoundProgressModule,
    FusionChartsModule,
    TranslateModule.forRoot(),

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
