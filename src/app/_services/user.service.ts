import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  profile = [
    {
      userId: '091fb499-ad55-44c3-b2f5-dfa290c62525',
      firstName: 'Andrey',
      lastName: 'Petrenko',
      email: 'apetrenko4@deepcode.co',
      userName: 'apetrenko4@deepcode.co',
      roles: [
        'Administrator',
        'Client Administrator',
        'User'
      ],
      pinCode: '#270386',
      allowUserSearch: true,
      allowUserPrintOnRedemption: true,
      allowUserReprintOnRedemption: true,
      lastPasswordChangedDate: '2018-04-09T00:00:00',
      expiredOn: null,
      employeeId: ''
    }
  ];
  constructor(private http: Http) { }

  getUserProfile() {
    return null;
  }
}
