import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = [];
  firstName: any;
  lastName: any;
  userName: any;
  pinCode: any;
  allowUserSearch: any;
  allowUserPrintOnRedemption: any;
  allowUserReprintOnRedemption: any;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.profile = this.userService.profile;
    this.firstName = this.profile[0].firstName;
    this.lastName = this.profile[0].lastName;
    this.userName = this.profile[0].userName;
    this.pinCode = this.profile[0].pinCode;
    this.allowUserSearch = this.profile[0].allowUserSearch;
    this.allowUserPrintOnRedemption = this.profile[0].allowUserPrintOnRedemption;
    this.allowUserReprintOnRedemption = this.profile[0].allowUserReprintOnRedemption;
    console.log(this.profile);
    this.authService.refreshTokenOnInit();
  }

}
