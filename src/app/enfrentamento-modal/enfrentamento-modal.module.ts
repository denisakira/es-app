import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnfrentamentoModalPage } from './enfrentamento-modal.page';
import { UserService } from '../services/user.service';

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
  providers: [UserService],
  declarations: [EnfrentamentoModalPage]
})
export class EnfrentamentoModalPageModule {}
