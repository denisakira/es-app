import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnfrentamentoPage } from './enfrentamento.page';
import { EnfrentamentoModalPageModule } from '../enfrentamento-modal/enfrentamento-modal.module';
import { UserService } from '../services/user.service';
import { CartaoService } from '../services/cartao.service';

const routes: Routes = [
  {
    path: '',
    component: EnfrentamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfrentamentoModalPageModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService, CartaoService],
  declarations: [EnfrentamentoPage]
})
export class EnfrentamentoPageModule {}
