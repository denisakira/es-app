import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(public fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileForm);
  }
}
