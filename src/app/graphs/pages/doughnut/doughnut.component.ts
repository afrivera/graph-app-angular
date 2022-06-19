import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public colors: Color [] = [ '#0075ED', '#00BAF7', '#00E0BD', '#0075ED', '#00ED63' ]
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: this.colors }/* ,
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] } */
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  

  constructor() { }
  
  ngOnInit(): void {
  }
  
  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
