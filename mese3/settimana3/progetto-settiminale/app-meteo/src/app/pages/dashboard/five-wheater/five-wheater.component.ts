import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteoService } from '../../../meteo.service';
import { IFiveForecastCity } from '../../../Models/i-five-forecast';


@Component({
  selector: 'app-five-wheater',
  templateUrl: './five-wheater.component.html',
  styleUrl: './five-wheater.component.scss'
})
export class FiveWheaterComponent {

  constructor(
    private route:ActivatedRoute,
    private meteoSvc:MeteoService
    ){}

  cityArr!:IFiveForecastCity
  iconUrl:string="https://openweathermap.org/img/wn/"

ngOnInit(){

  this.route.params.subscribe((params:any) =>{
     this.meteoSvc.getIdByFiveDay(params.id).subscribe(( res=>{

      return console.log(this.cityArr= res);



     }))
  })

}
}
