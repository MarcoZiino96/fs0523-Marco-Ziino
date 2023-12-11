
import { Component } from '@angular/core';
import { MeteoService } from '../../../meteo.service';
import {  ICurrentDayForecast } from '../../../Models/i-current-day-forecast';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

  city!: string;
  cityArr:ICurrentDayForecast[]=[]
  iconUrl: string = "https://openweathermap.org/img/wn/"


  constructor(
    private meteoSvc:MeteoService
  ){}

  ngOnInit(){

    this.meteoSvc.getAllILoveCity().subscribe((data)=>{
      data.forEach( c =>{
        this.meteoSvc.getIdByactualDay(c.id).subscribe(d=>{
          this.cityArr.push(d)

        })
      })
    })
  }

  deleteILoveCity( id:number, name:string){
    this.meteoSvc.deleteFavourite(id).subscribe(d=>{
      this.cityArr = this.cityArr.filter(el=> el.id!=id)
      alert(`hai rimosso corettamente${name}`)
    })
  }
}
