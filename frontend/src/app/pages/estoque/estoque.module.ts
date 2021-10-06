import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueComponent } from './estoque.component';
import { EstoqueRoutes } from './estoque.routing';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    EstoqueRoutes,
    ReactiveFormsModule,
    ComponentsModule,
    MatPaginatorModule
  ],
  declarations: [EstoqueComponent]
})
export class EstoqueModule { }
