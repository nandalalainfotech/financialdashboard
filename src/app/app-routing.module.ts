import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
},
{
  path: 'app-dash-board',
  component: DashboardComponent,
},
// {
//   path: '',
//   component: DashboardComponent,
// },
// {
//   path: 'app-dash-board',
//   loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule),
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
