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

  user: Observable<User>;
  terapeuta: string;
  items: string[];

  constructor(
    private emailComposer: EmailComposer,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  onSubmit() {
    this.sendMessage(this.contactForm.value.message);
  }

  sendMessage(message: string) {
    this.emailComposer.isAvailable().then((available: boolean) => {
      const email = {
        to: 'terapeuta@email.com',
        subject: 'Terapia Cognitivo Comportamental - ' + this.user,
        body: message,
        isHtml: true
      };

      // Send a text message using default options
      this.emailComposer.open(email);
    });
  }
}
