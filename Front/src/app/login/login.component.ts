import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  Boolean_loginRH: boolean;
  Boolean_loginC: boolean;
  is_afficher_Login: any;
  constructor() {
    this.Boolean_loginC = false;
    this.Boolean_loginRH = false;
    this.is_afficher_Login = false;
  }
  loginC() {
    if (this.Boolean_loginRH == false) {

    } else {
      this.Boolean_loginRH = false
    }
    this.Boolean_loginC = true;
  }
  loginRH() {
    if (this.Boolean_loginC == false) {

    } else {
      this.Boolean_loginC = false
    }
    this.Boolean_loginRH = true;
  }
  close_login() {
    this.is_afficher_Login = true;
  }





}