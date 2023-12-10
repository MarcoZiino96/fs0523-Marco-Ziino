import { environment } from './../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ISearchCity } from './Models/i-serch-city';
import { Coord, ICurrentDayForecast } from './Models/i-current-day-forecast';
import { IFiveForecastCity } from './Models/i-five-forecast';


@Injectable({
  providedIn: 'root'
})

export class MeteoService {



  constructor(
    private http: HttpClient
  ) { }

  getLatLon(query: string): Observable<ISearchCity[]> {
    let geoUrl = (`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${environment.apiKey}`);
    return this.http.get<ISearchCity[]>(geoUrl)
  }

  getCityMeteo(coord: Coord): Observable<ICurrentDayForecast> {
    let apiMeteo = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&lang=it&units=metric&appid=${environment.apiKey}`;
    return this.http.get<ICurrentDayForecast>(apiMeteo)
  }

  getIdByFiveDay(id:number):Observable<IFiveForecastCity>{
    let idApi = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&lang=it&appid=${environment.apiKey}&units=metric`;
    return this.http.get<IFiveForecastCity>(idApi);
  }

  addILoveCity(obj: ICurrentDayForecast): Observable<ICurrentDayForecast> {
    return this.http.post<ICurrentDayForecast>(environment.loveUrl, obj);
  }
  getILoveCity(id:number):Observable<ICurrentDayForecast[]>{
    return this.http.get<ICurrentDayForecast[]>(environment.loveUrl)
  }
  deleteFavourite(id:number):Observable<ICurrentDayForecast>{
    return this.http.delete<ICurrentDayForecast>(`${environment.loveUrl}/${id}`)
  }

}








