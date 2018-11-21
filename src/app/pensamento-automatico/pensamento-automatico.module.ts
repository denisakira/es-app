import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PensamentoAutomaticoPage } from './pensamento-automatico.page';

const routes: Routes = [
  {
    path: '',
    component: PensamentoAutomaticoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PensamentoAutomaticoPage]
})
export class PensamentoAutomaticoPageModule {}
