import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor( private http: HttpClient) { }

  getDataDoughnut(){
    return this.http.get('http://localhost:3000/graph');
  }

  getUsersNetworks(){
    return this.getDataDoughnut()
      .pipe( 
        delay(1599),
        map( data => {
          const labels = Object.keys( data )
          const values = Object.values( data )
          return { labels, values }
        } )
      )
  }
}
