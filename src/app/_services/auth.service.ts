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
        this.err = err.json().error_description;
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

}
