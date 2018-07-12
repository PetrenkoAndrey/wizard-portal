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
  public timerInterval: any;
  refresh_token = this.getTokenData('refresh_token');
  accountHash = this.getTokenData('accountHash');
  Authorization = '' ;

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
        localStorage.clear();
        this.response = JSON.parse(response.text());
        localStorage.setItem('authData', JSON.stringify(this.response));
        localStorage.setItem('Authorization', this.getTokenData('token_type') + ' ' + this.getTokenData('access_token'));
        this.timerInterval = setInterval(this.refreshToken.bind(this), 1000 * this.getTokenData('expires_in'));
        this._router.navigate(['home']);
      },
      err => {
        this.err = JSON.parse(err.text());
        this.errorMessage = this.err.error_description;
      }
    );
  }

  refreshToken() {
    const url = environment.authHost + '/token';
    this.refresh_token = this.getTokenData('refresh_token');
    this.accountHash = this.getTokenData('accountHash');
    let body = 'grant_type=refresh_token';
    body += '&refresh_token=' + this.refresh_token;
    body += '&accountHash=' + this.accountHash;
    body += '&client_id=portal';
    return this.http.post(url, body).subscribe(
      response => {
        localStorage.clear();
        this.response = JSON.parse(response.text());
        localStorage.setItem('authData', JSON.stringify(this.response));
        localStorage.setItem('Authorization', this.getTokenData('token_type') + ' ' + this.getTokenData('access_token'));
      },
      err => {
        this.err = JSON.parse(err.text());
        this.errorMessage = this.err.error_description;
      }
    );
  }

  getAuthToken() {
    this.Authorization = localStorage['Authorization'];
    return this.Authorization;
  }

  getTokenData(propertyName: string) {
    this.res = JSON.parse(localStorage['authData'] || '{}');
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

  logOut() {
    localStorage.clear();
    this._router.navigate(['login']);
  }

  refreshTokenOnInit(){
    this.refreshToken();
    return this.timerInterval = setInterval(this.refreshToken.bind(this), 1000 * this.getTokenData('expires_in'));
  }

}
