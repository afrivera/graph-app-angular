import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent {

  dataProvider: ChartData<'bar'> = {
    labels: [ '2021', '2022', '2023', '2024', '2025' ],
    datasets: [
      { data: [ 100, 200, 300, 400, 500 ], label: 'Salesman A'},
      { data: [ 20, 250, 30, 450, 200 ], label: 'Salesman B'},
    ]
  }

  dataProduct: ChartData<'bar'> = {
    labels: [ '2021', '2022', '2023', '2024', '2025' ],
    datasets: [
      { data: [ 200, 300, 400, 300, 100 ], label: 'Salesman A', backgroundColor: 'blue' }
    ]
  }

}
