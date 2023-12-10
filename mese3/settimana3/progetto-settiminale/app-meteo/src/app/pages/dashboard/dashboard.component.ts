
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MeteoService } from '../../meteo.service';
import { Coord, ICurrentDayForecast } from '../../Models/i-current-day-forecast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  city!:string;
  cityLove!:ICurrentDayForecast
  arrCity:ICurrentDayForecast[]=[];
  iconUrl:string="https://openweathermap.org/img/wn/"

  coord:Coord={
    lat: 0,
    lon: 0
  }

  constructor(
    private authSvc: AuthService,
    private meteoSvc:MeteoService
    ){}



  getActualMeteoCard(){

     this.meteoSvc.getLatLon(this.city).subscribe(data =>{

      data.forEach(c =>{
        this.coord.lat = c.lat;
        this.coord.lon = c.lon;
        this.meteoSvc.getCityMeteo(this.coord).subscribe(data => {
          this.arrCity.push(data);
        })
      })
    })
  }

  add() {
    this.meteoSvc.addILoveCity(this.cityLove).subscribe((data) => {
      console.log(data);
  })
}


  logOut(){
    this.authSvc.logOut()
  }



}
