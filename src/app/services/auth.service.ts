import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http, private _router: Router) {}

  getToken(username: string, password: string) {
    const url = 'https://dev-auth.offercraft.net/token';
    let body = 'grant_type=password';
    body += '&username=' + username;
    body += '&password=' + password;
    body += '&twoFactorToken=undefined';
    body += '&rememberBrowserToken=null';
    body += '&client_id=portal';
    return this.http.post(url, body)
      .subscribe(
        data => {
          this._router.navigate(['home']);
        },
        err => console.log(err.json().error_description),
      );
  }
}
