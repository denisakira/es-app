import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { EnfrentamentoPageModule } from '../enfrentamento/enfrentamento.module';
import { PensamentoAutomaticoPageModule } from '../pensamento-automatico/pensamento-automatico.module';
import { HumorPageModule } from '../humor/humor.module';
import { OptionsPageModule } from '../options/options.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    EnfrentamentoPageModule,
    PensamentoAutomaticoPageModule,
    OptionsPageModule,
    HumorPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
