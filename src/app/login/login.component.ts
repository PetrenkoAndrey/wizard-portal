import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private _router: Router) { }

  username = 'apetrenko4@deepcode.co';
  password = 'Password123';
  response : any;
  displayName: any;
  account:any;
  err:any;

  login() {
    this.err = '';
    return this.authService.getToken(this.username, this.password).subscribe(
      response => {
        console.log(JSON.parse(response.text()));
        this.response = JSON.parse(response.text());
        this.displayName = this.response.displayName;
        this.account = this.response.clientName;
        this._router.navigate(['home']);
      },
      err => {
        console.log(err.json().error_description);
        this.err = err.json().error_description;
      }
    );

  }

}
