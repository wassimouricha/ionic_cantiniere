import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { 


  }

  saveToken(token : string){
    localStorage.setItem('token', token)

  }
  isLogged(){
    const savedToken =  localStorage.getItem('token');
    //  !! transforme la variable en booleen
    return !! savedToken

  }

  getUserInfo(){
    const savedToken =  localStorage.getItem('token');

    if(savedToken != null){
          const infoDecode : any = jwtDecode(savedToken);

          return infoDecode.user
    } return false
  }

  logout(){
    localStorage.removeItem('token');
  }

}
