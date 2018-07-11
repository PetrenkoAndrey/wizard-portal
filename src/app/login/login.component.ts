import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService) { }

  username = '';
  password = '';

  login() {
    return this.authService.getToken(this.username, this.password);
  }

  getErrorMessage() {
    return this.authService.errorMessage;
  }

  ngOnInit(){
    return this.authService.clearErrorMessages();
  }
}
