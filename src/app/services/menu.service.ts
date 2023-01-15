import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageMeal, Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseURL = environment.url;


    

  constructor( 
    private _http: HttpClient
  ){}


      getMenuOfTheWeek() : Observable<Menu[]>{
        return this._http.get<Menu[]>(`${this.baseURL}/meal/findallavailableforthisweek`)
      }

      getImageForAMeal(imageId: number): Observable<ImageMeal>{
        return this._http.get<ImageMeal>(`${this.baseURL}/meal/findimg/${imageId}`)

      }
}
