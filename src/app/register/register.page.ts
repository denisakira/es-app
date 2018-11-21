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
  public isClicked: Boolean;
  public isEmailVali: Boolean;
  //public nome_terapeuta;

  constructor(fb: FormBuilder, private auth: AuthenticationService, public router: Router) { 
      this.isClicked = false;
    }

    salvar(email, password, nome, nome_terapeuta, email_terapeuta){
      this.auth.signUp(email, password, nome, nome_terapeuta, email_terapeuta);
    }

    /* Essa parte comentada é para uma futura implementacao de uma admin page
    onInputTime(email){
     //var tete = this.auth.verificaEmail(email);
     //console.log(tete);
     this.isClicked = false;
    }*/

    /* Essa parte comentada é para uma futura implementacao de uma admin page
    async clicado(email){
      this.isClicked = true;
      await this.auth.verificaEmail(email);
      console.log(this.auth.match);
      if(this.auth.match == true){
        this.nome_terapeuta = this.auth.nome_tera;
        this.isEmailVali = true;
      }
      else{
        this.isEmailVali = false;
      }
    }*/

  ngOnInit() {
  }

}
