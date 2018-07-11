import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response: any;
  err: any;
  res: any;
  errorMessage = '';

  constructor(private http: Http, private _router: Router) {}

  getToken(username: string, password: string) {
    const url = environment.authHost + '/token';
    let body = 'grant_type=password';
    body += '&username=' + username;
    body += '&password=' + password;
    body += '&twoFactorToken=undefined';
    body += '&rememberBrowserToken=null';
    body += '&client_id=portal';

    return this.http.post(url, body).subscribe(
      response => {
        this.response = JSON.parse(response.text());
        localStorage.setItem('authData', JSON.stringify(this.response));
        this._router.navigate(['home']);
      },
      err => {
        this.err = JSON.parse(err.text());
        this.errorMessage = this.err.error_description;
      }
    );
  }

  logOut() {
    localStorage.clear();
    this._router.navigate(['login']);
  }

  getTokenData(propertyName: string) {
    this.res = JSON.parse(localStorage['authData'] || '{}');
    console.log(this.res[propertyName]);
    return this.res[propertyName];
  }


  restorePassword(email: string) {
    const url = environment.authHost + '/api/Users/reset-password';
    const body = {};
    body['email'] = email;
    body['sourceForm'] = 'forgotForm';
    body['requestSiteName'] = 'PortalSiteUrl';

    return this.http.post(url, body).subscribe(
      response => {
        this.response = JSON.parse(response.text());
        this._router.navigate(['login']);
      },
      err => {
        this.err = JSON.parse(err.text());
        this.errorMessage = this.err.modelState.errors[0];
      }
    );
  }

  clearErrorMessages() {
    return this.errorMessage = '';
  }

}
