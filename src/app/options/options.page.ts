import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss']
})
export class OptionsPage implements OnInit {
  profileForm: FormGroup = this.fb.group({
    nome: [''],
    email: [''],
    password: [''],
    terapeuta: [''],
    email_terapeuta: ['']
  });

  constructor(
    public fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileForm);
  }

  async logout() {
    const res = await this.authService.logout();
    console.log(res);
    this.router.navigateByUrl('');
  }
}
