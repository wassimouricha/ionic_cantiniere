import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login, Register } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }
// fonction pour se connecter a l'api
  login(login : Login) : Observable<HttpResponse<object>>{
    return this.httpClient.post('http://localhost:8080/stone.lunchtime/login', login , {observe: 'response'}) 

  }
  // fonction pour s'inscrire sur l'api
  register(register : Register ) : Observable<HttpResponse<object>>{
    return this.httpClient.put('http://localhost:8080/stone.lunchtime/user/register', register , {observe: 'response'}) 
  }

}
