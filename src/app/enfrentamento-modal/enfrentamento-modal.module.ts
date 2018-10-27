import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnfrentamentoModalPage } from './enfrentamento-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EnfrentamentoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnfrentamentoModalPage]
})
export class EnfrentamentoModalPageModule {}
