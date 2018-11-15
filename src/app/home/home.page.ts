import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { UserService, User } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  users: Observable<User[]>;
  user: Observable<User>;
  // user: string;
  terapeuta: string;
  items: string[];

  constructor(
    private emailComposer: EmailComposer,
    private userService: UserService
  ) {
    this.items = ['item', 'item2'];
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.user = this.userService.getUser();
  }

  sendMessage() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      const email = {
        to: 'max@mustermann.de',
        cc: 'erika@mustermann.de',
        bcc: ['john@doe.com', 'jane@doe.com'],
        subject: 'TCC - ' + this.user,
        body: 'How are you? Nice greetings from Leipzig',
        isHtml: true
      };

      // Send a text message using default options
      this.emailComposer.open(email);
    });
  }
}
