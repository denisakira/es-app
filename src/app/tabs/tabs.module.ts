import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { EnfrentamentoPageModule } from '../enfrentamento/enfrentamento.module';
import { WelcomePageModule } from '../welcome/welcome.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    EnfrentamentoPageModule,
    WelcomePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
