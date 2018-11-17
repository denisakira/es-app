import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnfrentamentoModalPage } from '../enfrentamento-modal/enfrentamento-modal.page';
import { Observable } from 'rxjs';
import { Cartao, UserService } from '../services/user.service';

@Component({
  selector: 'app-enfrentamento',
  templateUrl: './enfrentamento.page.html',
  styleUrls: ['./enfrentamento.page.scss']
})
export class EnfrentamentoPage implements OnInit {
  cartoes: Observable<Cartao[]>;

  constructor(
    public modalController: ModalController,
    private userService: UserService
  ) {
    this.cartoes = userService.getCartoes();
  }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: EnfrentamentoModalPage
    });
    return await modal.present();
  }
}
