import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	signupError: string;
	form: FormGroup;

  constructor(fb: FormBuilder, private auth: AuthenticationService, public router: Router) { 

    }

    salvar(email, password, nome, nome_terapeuta){
      this.auth.signUp(email, password,nome, nome_terapeuta);
    }

    signup(email, password, nome, nome_terapeuta) {
      this.auth.signUp(email, password,nome, nome_terapeuta)
    }

  ngOnInit() {
  }

}
