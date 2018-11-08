import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
  //{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './welcome/welcome.module#WelcomePageModule' },  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'entrar', loadChildren: './entrar/entrar.module#EntrarPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
