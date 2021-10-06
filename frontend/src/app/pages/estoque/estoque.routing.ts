import { Routes, RouterModule } from '@angular/router';
import { EstoqueResolve } from './estoque-resolve';
import { EstoqueComponent } from './estoque.component';

const routes: Routes = [
  {  
    path:"",
    component: EstoqueComponent,
    resolve: {
      estoque: EstoqueResolve
    }
  },
];

export const EstoqueRoutes = RouterModule.forChild(routes);
