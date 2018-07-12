import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.refreshTokenOnInit();
  }

}
