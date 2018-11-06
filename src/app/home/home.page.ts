import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  user: string;
  terapeuta: string;
  items: string[];

  constructor(private emailComposer: EmailComposer) {
    this.user = 'Mundo';
    this.terapeuta = 'Terapeuta';
    this.items = [
      'item',
      'item2',
    ];
  }

  sendMessage() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        let email = {
          to: 'max@mustermann.de',
          cc: 'erika@mustermann.de',
          bcc: ['john@doe.com', 'jane@doe.com'],
          subject: 'TCC - ' + this.user,
          body: 'How are you? Nice greetings from Leipzig',
          isHtml: true
        };

        // Send a text message using default options
        this.emailComposer.open(email);

      }
    });

  }
}
