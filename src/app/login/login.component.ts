import { Component } from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  username = '';
  password = '';
  err = '';

  login() {
    return this.authService.getToken(this.username, this.password);
  }

}
