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
  cartao: Observable<Cartao>;

  constructor(
    public modalController: ModalController,
    private userService: UserService
  ) {
    this.cartao = userService.getCartao();
  }

  ngOnInit() {
    console.log(this.cartao);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EnfrentamentoModalPage
    }); 
    return await modal.present();
  }
}
