import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'entrar', loadChildren: './entrar/entrar.module#EntrarPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
