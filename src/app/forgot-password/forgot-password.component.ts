import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  constructor(private authService: AuthService) { }

  email = '';

  restorePassword() {
    return this.authService.restorePassword(this.email);
  }

  getErrorMessage(){
    return this.authService.errorMessage;
  }

  ngOnInit(){
    return this.authService.clearErrorMessages();
  }
}
