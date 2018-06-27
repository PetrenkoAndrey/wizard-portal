import { Input, Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginComponent: LoginComponent) { }

  ngOnInit() {

  console.log(this.loginComponent.response);

  }

}
