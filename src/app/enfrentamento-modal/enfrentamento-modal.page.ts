import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enfrentamento-modal',
  templateUrl: './enfrentamento-modal.page.html',
  styleUrls: ['./enfrentamento-modal.page.scss'],
})
export class EnfrentamentoModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
