import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnfrentamentoModalPage } from '../enfrentamento-modal/enfrentamento-modal.page';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartaoService, Cartao } from '../services/cartao.service';

@Component({
  selector: 'app-enfrentamento',
  templateUrl: './enfrentamento.page.html',
  styleUrls: ['./enfrentamento.page.scss']
})
export class EnfrentamentoPage implements OnInit {
  cartoes: Cartao[];

  constructor(
    public modalController: ModalController,
    private cartaoService: CartaoService,
  ) {
    cartaoService.getCartoes().subscribe(res => {
      this.cartoes = res;
    });
  }

  ngOnInit() {}

  async onClick(cartao) {
    const update = { ...cartao, concluido: true };
    this.cartaoService.updateCartao(update);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EnfrentamentoModalPage
    });
    return await modal.present();
  }
}
