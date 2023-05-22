import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {




  close_login() {
    this.is_afficher_Login = true;
  }


  @Input() is_afficher_Login: boolean;

  @Input() user_info_login: string;
  @Input() mdp_info_login: string;


  @Output() dataEvent_isLogin = new EventEmitter<boolean>();

  angForm: FormGroup;

  isLogin = false

  hash: string;
  data: any;


  constructor(private http: HttpClient, private fb: FormBuilder,) {
    this.user_info_login = ""
    this.mdp_info_login = ""
    this.is_afficher_Login = false
    this.hash = ""
    this.angForm = this.fb.group({

      user: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', Validators.required]

    });
    localStorage.setItem('token', "ekjreiorjpo");
  }

  ngOnInit() {


  }






  get user() { return this.angForm.get('user'); }
  get password() { return this.angForm.get('password'); }






}