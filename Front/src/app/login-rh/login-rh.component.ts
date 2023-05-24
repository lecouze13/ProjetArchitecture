import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-rh',
  templateUrl: './login-rh.component.html',
  styleUrls: ['./login-rh.component.css']
})
export class LoginRHComponent {



  close_login() {
    this.is_afficher_Login = true;
  }


  @Input() is_afficher_Login: boolean;

  @Input() user_info_login: string;
  @Input() mdp_info_login: string;


  @Output() dataEvent_isLogin = new EventEmitter<boolean>();

  angForm: FormGroup;

  isLogin = false

  // hash: string;
  data: any;


  constructor(private http: HttpClient, private fb: FormBuilder, private services: ServicesService) {
    this.user_info_login = ""
    this.mdp_info_login = ""
    this.is_afficher_Login = false
    // this.hash = ""
    this.angForm = this.fb.group({

      user: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', Validators.required]

    });

  }
  submit_login() {

    this.services.login(this.user_info_login, this.mdp_info_login).subscribe(
      (response) => {
        // Traitement des données de réponse ici
        console.log("Réponse de la requête :", response);
      },
      (error) => {
        // Gestion des erreurs
        console.error("Une erreur s'est produite :", error);
      }
    );
  }
  ngOnInit() {


  }






  get user() { return this.angForm.get('user'); }
  get password() { return this.angForm.get('password'); }






}
