import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {

  public label: string[] = [];
  public data: number [] = [];

  public colors: Color [] = [ '#0075ED', '#00BAF7', '#00E0BD', '#0075ED', '#00ED63' ];

  public doughnutChartData!: ChartData<'doughnut'> 
  public doughnutChartType: ChartType = 'doughnut';


  constructor(
    private graphsService: GraphsService
  ) { }

  ngOnInit(): void {
    // this.graphsService.getDataDoughnut()
    //   .subscribe( data =>{
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );
    //     // console.log(Object.keys( data ));
    //     this.label = labels;
    //     this.data = values;

    //     this.doughnutChartData = {
    //       labels: this.label,
    //       datasets: [
    //         { 
    //           data: this.data , 
    //           backgroundColor: this.colors 
    //         }
    //       ]
    //     };
    //   })

    this.graphsService.getUsersNetworks()
      .subscribe( data => {
        this.label = data.labels;
        this.data = data.values;
        this.doughnutChartData = {
          labels: this.label,
          datasets: [
            {
              data: this.data
            }
          ]
        }
      })
  }

}
