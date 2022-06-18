import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styles: [
  ]
})
export class GraphBarComponent  implements OnInit {

  @Input() horizontal: boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    
  };
  public barChartType: ChartType = 'bar';


  @Input() barChartData: ChartData<'bar'> = {
    labels: [ /* '2006', '2007', '2008', '2009', '2010', '2011', '2012' */ ],
    datasets: [
      /* { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red'},
      { data: [ 29, 40, 40, 39, 76, 23, 50 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor:'#red' }
     */]
  };

  constructor() { }

  ngOnInit(): void {
    if( this.horizontal) {
     this.barChartOptions!.indexAxis = 'y'
    }
  }

 
}
