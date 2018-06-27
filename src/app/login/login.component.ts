import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  username = 'apetrenko4@deepcode.co';
  password = 'Password123';

  login() {
    return this.authService.getToken(this.username, this.password);

  }

}
