import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnfrentamentoPage } from './enfrentamento.page';
import { EnfrentamentoModalPageModule } from '../enfrentamento-modal/enfrentamento-modal.module';

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
  declarations: [EnfrentamentoPage]
})
export class EnfrentamentoPageModule {}
