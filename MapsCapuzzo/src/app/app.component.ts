import { Component } from '@angular/core';
import { Point } from '@agm/core/services/google-maps-types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MapsCapuzzo';
  lat: number = 45.506738;
  lng: number = 9.190766;


  triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

  icon =  {
    url:'./assets/img/99 - cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };



}



