import { Component } from '@angular/core';
import {AuthService} from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  getTokenData(prop:string){
    return this.authService.getTokenData(prop);
  }

  logout(){
    return this.authService.logOut();
  }
}
