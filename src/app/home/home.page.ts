import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { UserService, User } from '../services/user.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  contactForm: FormGroup = this.fb.group({
    message: ['']
  });

  user: User;
  terapeuta: string;
  items: string[];

  constructor(
    private emailComposer: EmailComposer,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(res => {
      this.user = res;
    });
  }

  onSubmit() {
    this.sendMessage(this.contactForm.value.message);
  }

  sendMessage(message: string) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      const email = {
        to: this.user.EmailTerapeuta,
        subject: 'Terapia Cognitivo Comportamental - ' + this.user.Nome,
        body: message,
        isHtml: true
      };

      // Send a text message using default options
      this.emailComposer.open(email);
    });
  }
}
