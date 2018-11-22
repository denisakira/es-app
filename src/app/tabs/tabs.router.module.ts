import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { EnfrentamentoPage } from '../enfrentamento/enfrentamento.page';
import { HumorPage } from '../humor/humor.page';
import { OptionsPage } from '../options/options.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'enfrentamento',
        outlet: 'enfrentamento',
        component: EnfrentamentoPage
      },
      {
        path: 'options',
        outlet: 'options',
        component: OptionsPage
      },
      {
        path: 'humor',
        outlet: 'humor',
        component: HumorPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
