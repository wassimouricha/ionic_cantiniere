import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Login } from '../services/auth';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

    // any car pas de type
    form: Login = {
      email: '',
      password: ''
    }

  constructor(

    private http: HttpClient, 
    private authService : AuthService , 
    private tokenService : TokenService) {}

    ngOnInit(): void {
    }
  

  // fonction pour se connecter a l'api
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data.headers.get('Authorization'));
        //@ts-ignore
      this.tokenService.saveToken(data.headers.get('Authorization'))
      }
    )
    
}


}
