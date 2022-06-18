import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'bar', component: BarsComponent },
      { path: 'double-bar', component: DoubleBarsComponent },
      { path: 'doughnut', component: DoughnutComponent },
      { path: 'doughnut-http', component: DoughnutHttpComponent },
      { path: '**', redirectTo: 'bar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
