import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService, User, Cartao } from '../services/user.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enfrentamento-modal',
  templateUrl: './enfrentamento-modal.page.html',
  styleUrls: ['./enfrentamento-modal.page.scss']
})
export class EnfrentamentoModalPage {
  enfrentamentoForm: FormGroup = this.fb.group({
    descricao: ['']
  });

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  closeModal() {
    this.modalController.dismiss();
  }

  async onSubmit() {
    const cartao: Cartao = {
      descricao: this.enfrentamentoForm.value.descricao
    };
    this.modalController.dismiss();
    const res = this.userService.addCartao(cartao);
    console.log(res);
  }
}
