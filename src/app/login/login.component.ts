import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
    }else {
      alert("Invalid input");
    }
  }
  }
