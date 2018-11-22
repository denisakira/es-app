import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HumorPage } from './humor.page';
import { HumorService } from '../services/humor.service';

const routes: Routes = [
  {
    path: '',
    component: HumorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [HumorService],
  declarations: [HumorPage]
})
export class HumorPageModule {}
