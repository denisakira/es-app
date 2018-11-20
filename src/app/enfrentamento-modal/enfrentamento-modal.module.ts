import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnfrentamentoModalPage } from './enfrentamento-modal.page';
import { UserService } from '../services/user.service';
import { Camera } from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: EnfrentamentoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService, Camera],
  declarations: [EnfrentamentoModalPage]
})
export class EnfrentamentoModalPageModule {}
