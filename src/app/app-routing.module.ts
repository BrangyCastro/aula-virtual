import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: '',
    component: PagesComponent,
    // canActivate: [ LoginGuard ],
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
