import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'src/app/pages/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'home',
    loadChildren: 'src/app/pages/home/home.module#HomeModule'
  },
  {
    path: 'estoque',
    loadChildren: 'src/app/pages/estoque/estoque.module#EstoqueModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
