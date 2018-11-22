import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User, UserService } from '../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss']
})
export class OptionsPage implements OnInit {
  profileForm: FormGroup = this.fb.group({
    nome: [''],
    email: ['', Validators.email],
    password: [''],
    terapeuta: [''],
    email_terapeuta: ['']
  });
  currUser: User;

  constructor(
    public fb: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(res => {
      this.currUser = res;
    });
  }

  async onSubmit() {
    const data = this.profileForm.value;
    let update: User = this.currUser;

    if (data.nome !== '') {
      this.currUser = {
        ...this.currUser,
        Nome: data.nome
      };
    }

    if (data.email !== '') {
      this.currUser = {
        ...this.currUser,
        Email: data.email
      };
    }

    if (data.terapeuta !== '') {
      this.currUser = {
        ...this.currUser,
        NomeTerapeuta: data.terapeuta
      };
    }
    await this.userService.updateUser(this.currUser);
    this.profileForm.reset();
    this.router.navigateByUrl('/app/tabs/(home:home)');
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['']);
  }
}
